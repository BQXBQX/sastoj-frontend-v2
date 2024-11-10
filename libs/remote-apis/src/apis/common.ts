import REQUEST from '../web/request';

interface AuthToken {
  token: string;
}

export const login = async (
  _url: string,
  {
    arg,
  }: {
    arg: {
      username: string;
      password: string;
    };
  },
): Promise<AuthToken> => {
  return await REQUEST({
    url: '/login',
    method: 'POST',
    data: {
      username: arg.username,
      password: arg.password,
    },
  });
};
