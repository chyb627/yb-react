export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">타이틀</div>

          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">영차영차</div>
            <div className="post__date">2023.07.08 토요일</div>
          </div>

          <div className="post__utils-box">
            <div className="post__edit">수정</div>
            <div className="post__delete">삭제</div>
          </div>

          <div className="post__text">텍스트~~~~~~~~~~</div>
        </div>
      </div>
    </>
  );
}
