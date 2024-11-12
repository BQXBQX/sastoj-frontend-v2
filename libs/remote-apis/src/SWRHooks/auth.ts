import { login } from '../apis/common';
import useSWRMutation from 'swr/mutation';

export const useSWRLogin = () => {
  const { trigger } = useSWRMutation('/api/login', login);

  const loginTrigger = async (username: string, password: string) => {
    const loginData = await trigger({ username, password });
    localStorage.setItem('authToken', loginData.token);
  };

  return loginTrigger;
};
