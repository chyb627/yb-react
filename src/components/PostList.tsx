import AuthContext from 'context/AuthContext';
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from 'firebaseApp';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

interface PostListProps {
  hasNavigation?: boolean;
  defaultTab?: TabType | CategoryType;
}

type TabType = 'all' | 'my';

export interface PostProps {
  id?: string;
  title: string;
  email: string;
  summary: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  uid: string;
  category?: CategoryType;
}

export type CategoryType = 'Frontend' | 'Backend' | 'Web' | 'Native';
export const CATEGORIES: CategoryType[] = ['Frontend', 'Backend', 'Web', 'Native'];

export default function PostList({ hasNavigation = true, defaultTab = 'all' }: PostListProps) {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState<TabType | CategoryType>(defaultTab || 'all');
  const [posts, setPosts] = useState<PostProps[]>([]);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm('해당 게시글을 삭제하시겠습니까?');
    if (confirm && id) {
      await deleteDoc(doc(db, 'posts', id));
      toast.success('삭제됬슴둥!');
      getPosts();
    }
  };

  const getPosts = async () => {
    // const data = await getDocs(collection(db, 'posts'));
    // console.log('data::', data);

    setPosts([]);
    let postsRef = collection(db, 'posts');
    let postsQuery;

    if (activeTab === 'my' && user) {
      // 나의 글 필터링
      postsQuery = query(postsRef, where('uid', '==', user.uid), orderBy('createdAt', 'asc'));
    } else if (activeTab === 'all') {
      // 모든 글 보여주기
      postsQuery = query(postsRef, orderBy('createdAt', 'asc'));
    } else {
      // 카테고리 글 보여주기
      postsQuery = query(postsRef, where('category', '==', activeTab), orderBy('createdAt', 'asc'));
    }

    const data = await getDocs(postsQuery);

    data?.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id };
      setPosts((prev) => [...prev, dataObj as PostProps]);
    });
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab('all')}
            className={activeTab === 'all' ? 'post__navigation--active' : ''}
          >
            전체
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab('my')}
            className={activeTab === 'my' ? 'post__navigation--active' : ''}
          >
            나의 글
          </div>

          {CATEGORIES?.map((category) => (
            <div
              key={category}
              role="presentation"
              onClick={() => setActiveTab(category)}
              className={activeTab === category ? 'post__navigation--active' : ''}
            >
              {category}
            </div>
          ))}
        </div>
      )}

      <div className="post__list">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <div key={post?.id} className="post__box">
              <Link to={`/posts/${post?.id}`}>
                <div className="post__profile-box">
                  <div className="post__profile" />
                  <div className="post__author-name">{post?.email}</div>
                  <div className="post__date">{post?.createdAt}</div>
                </div>
                <div className="post__title">{post?.title}</div>
                <div className="post__text">{post?.summary}</div>
              </Link>
              {post?.email === user?.email && (
                <div className="post__utils-box">
                  <div className="post__edit">
                    <Link to={`/posts/edit/${post?.id}`}>수정</Link>
                  </div>
                  <div
                    className="post__delete"
                    onClick={() => {
                      handleDelete(post.id as string);
                    }}
                  >
                    삭제
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="post__no-post">게시글이 없습둥.</div>
        )}
      </div>
    </>
  );
}
