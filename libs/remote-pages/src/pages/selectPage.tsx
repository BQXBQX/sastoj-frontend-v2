import { Button, Card, Pagination, Space, Tag, Toast } from '@douyinfe/semi-ui';
import { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useGetContests } from 'remote_apis/contest';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import { IconCalendarClock } from '@douyinfe/semi-icons';
import AddContestButton from '../components/AddContestButton';
import { contestType } from '../const/contestType';
import { TagColor } from '@douyinfe/semi-ui/lib/es/tag';
import { useDeleteContest } from 'remote_apis/contest';
import { DeleteButton } from '../components/DeleteButton';

interface SelectPageProps {
  type: 'competition' | 'management';
}

const contestTypeColor: { [key: number]: string } = {
  1: 'amber',
  2: 'violet',
  3: 'cyan',
};

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
  const deleteTrigger = useDeleteContest();
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

  const handleSelectContest = useCallback((contestID: number) => {
    console.log(contestID);
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
          <AddContestButton onSuccess={() => mutate()} />
        )}
      </SelectHeaderContainer>
      <ContestContainer>
        {(contestData?.contests ?? []).map((contest, key) => {
          return (
            <Card
              key={key}
              loading={isLoading}
              style={{
                minWidth: 340,
                height: 220,
                display: 'flex',
                flexDirection: 'column',
              }}
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
                  <Tag
                    color={contestTypeColor[Number(contest.type)] as TagColor}
                  >
                    {contestType[Number(contest.type)]}
                  </Tag>
                </div>
              }
              headerStyle={{ padding: '0.8rem' }}
              headerExtraContent={<Text link>编辑</Text>}
              bodyStyle={{ flexGrow: 1, overflow: 'scroll', padding: '0.8rem' }}
              footerLine={true}
              footerStyle={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '0.8rem',
              }}
              footer={
                <Space>
                  <DeleteButton
                    modelTitle="删除比赛"
                    modalContent={`你确定要删除比赛${contest.title}吗？`}
                    buttonTrigger={(onSuccess) => {
                      deleteTrigger(contest.id)
                        .then(() => {
                          Toast.info('删除比赛成功');
                          mutate();
                          onSuccess();
                        })
                        .catch(() => {
                          Toast.error('删除比赛失败');
                        });
                    }}
                  >
                    删除比赛
                  </DeleteButton>
                  <Button
                    theme="solid"
                    type="primary"
                    onClick={() => handleSelectContest(contest.id)}
                  >
                    选中比赛
                  </Button>
                </Space>
              }
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
