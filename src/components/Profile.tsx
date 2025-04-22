import AuthContext from 'context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { app } from 'firebaseApp';
import { useContext } from 'react';
import { toast } from 'react-toastify';

export default function Profile() {
  const auth = getAuth(app);
  const { user } = useContext(AuthContext);
  // console.log('auth::', auth);
  // console.log('user::', user);

  const onSignOut = async () => {
    try {
      await signOut(auth);
      toast.success('로그아웃 되었슴둥');
    } catch (e: any) {
      console.log('로그아웃 error::', e);
      toast.error(e?.code);
    }
  };

  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />

        <div>
          <div className="profile__email">{user?.email}</div>
          <div className="profile__name">{user?.displayName || '사용자'}</div>
        </div>
      </div>

      <div onClick={onSignOut} role="presentation" className="profile__logout">
        로그아웃
      </div>
    </div>
  );
}
