import { useEffect, useState } from 'react';
import DesktopLogin from './DesktopLogin'
import MobileLogin from './MobileLogin';

const LoginPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileLogin /> : <DesktopLogin />}
    </>
  );
};

export default LoginPage
