import useSWR from 'swr';
import {
  addContest,
  Contest,
  deleteContest,
  getContests,
} from '../apis/contest';
import useSWRMutation from 'swr/mutation';

export const useGetContests = (size: number, current: number) => {
  const { data, error, isLoading, mutate } = useSWR(
    ['/contest', size, current],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_key, size, current]) => getContests({ size, current }),
  );

  return { data, error, isLoading, mutate };
};

export const useAddContest = () => {
  const { trigger } = useSWRMutation('/contest', addContest);

  const addContestTrigger = async (contest: Contest) => {
    await trigger({ contest });
  };

  return addContestTrigger;
};

export const useDeleteContest = () => {
  const { trigger } = useSWRMutation('/contest', deleteContest);

  const deleteContestTrigger = async (contestId: number) => {
    await trigger({ contestId });
  };

  return deleteContestTrigger;
};
