import { useEffect, useState } from 'react';
import DesktopSignUp from './SignUp/DesktopSignUp'
import MobileSignup from './SignUp/MobileSignup';

const SignUpPage = () => {
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
      {isMobile ? <MobileSignup /> : <DesktopSignUp />}
    </>
  );
};

export default SignUpPage
