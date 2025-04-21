import { useState } from 'react';
import Router from './components/Router';
import { getAuth } from 'firebase/auth';
import { app } from 'firebaseApp';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const auth = getAuth(app);
  // console.log('auth::', auth);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);

  return (
    <>
      <ToastContainer />
      <Router isAuthenticated={isAuthenticated} />
    </>
  );
}
