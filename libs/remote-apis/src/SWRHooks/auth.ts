import { login } from '../apis/common';
import useSWRMutation from 'swr/mutation';

export const useSWRLogin = () => {
  const { trigger } = useSWRMutation('/api/login', login);

  const loginTrigger = async (username: string, password: string) => {
    const token = await trigger({ username, password });
    console.log(token);
  };

  return loginTrigger;
};
