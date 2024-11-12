import REQUEST from '../web/request';

export interface Contest {
  description?: string;
  endTime?: string;
  extraTime?: number;
  id?: number;
  language?: string;
  startTime?: string;
  state?: number;
  title?: string;
  type?: number;
  [property: string]: unknown;
}

export const getContests = async ({
  size,
  current,
}: {
  size: number;
  current: number;
}): Promise<{ contests: Contest[] }> => {
  return await REQUEST({
    url: '/contest',
    method: 'GET',
    params: { size, current },
  });
};

export const addContest = async (
  _url: string,
  { arg }: { arg: { contest: Contest } },
) => {
  return await REQUEST({
    url: '/contest',
    method: 'POST',
    data: arg.contest,
  });
};
