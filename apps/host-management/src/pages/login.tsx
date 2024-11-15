import { useNavigate } from '@tanstack/react-router';
import { LoginPage } from 'remote_pages/login';

export default function Login() {
  const navigate = useNavigate();

  return (
    <LoginPage
      title="SAST Online Judge 管理平台"
      desc="This is SAST Online Judge Management Platform"
      loginCallback={() => navigate({ to: '/contests' })}
    />
  );
}
