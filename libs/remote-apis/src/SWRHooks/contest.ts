import useSWR from 'swr';
import { getContests } from '../apis/contest';

export const useGetContests = (size: number, current: number) => {
  const { data, error, isLoading } = useSWR(
    ['/contest', size, current],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_key, size, current]) => getContests({ size, current }),
  );

  return { data, error, isLoading };
};
