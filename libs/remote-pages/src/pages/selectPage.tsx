import { Card, Pagination } from '@douyinfe/semi-ui';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useGetContests } from 'remote_apis/contest';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import { IconCalendarClock } from '@douyinfe/semi-icons';
import AddContestButton from '../components/AddContestButton';

interface SelectPageProps {
  type: 'competition' | 'management';
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 1.2rem;
  padding: 1.4rem;
  box-sizing: border-box;
`;

const Title = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`;

const ContestContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1rem;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: end;
`;

export const SelectHeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export function SelectPage(props: SelectPageProps) {
  const [contestsCurrentPage, setContestsCurrentPage] = useState<number>(0);
  const {
    data: contestData,
    isLoading,
    mutate,
  } = useGetContests(contestsCurrentPage, 9);
  const greetingTime = useMemo(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 11 && currentHour < 14) return '中午';
    else if (currentHour >= 14 && currentHour <= 19) return '下午';
    else if (currentHour >= 19 && currentHour < 24) return '晚上';
    else if (currentHour >= 0 && currentHour < 3) return '凌晨';
    else return '早上';
  }, []);

  return (
    <SelectContainer>
      <SelectHeaderContainer>
        <Title>
          👋 {greetingTime}好, 下面是您可以
          {props.type === 'competition' ? '参加' : '管理'}
          的比赛
        </Title>
        {props.type === 'management' && (
          <AddContestButton
            onSuccess={() => {
              mutate();
            }}
          />
        )}
      </SelectHeaderContainer>
      <ContestContainer>
        {(contestData?.contests ?? []).map((contest, key) => {
          return (
            <Card
              key={key}
              title={
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <IconCalendarClock />
                  <strong>{contest.title}</strong>
                </div>
              }
              style={{
                minWidth: 340,
                height: 220,
              }}
              headerExtraContent={<Text link>选中</Text>}
              loading={isLoading}
            >
              {contest.description}
            </Card>
          );
        })}
      </ContestContainer>
      <PaginationContainer>
        <Pagination
          total={(contestData?.contests ?? []).length}
          pageSize={10}
          currentPage={contestsCurrentPage + 1}
          onPageChange={(pageIndex) => setContestsCurrentPage(pageIndex - 1)}
        />
      </PaginationContainer>
    </SelectContainer>
  );
}
