import { Button, Form, Select, SideSheet, Toast } from '@douyinfe/semi-ui';
import { memo, useState } from 'react';
import { type Contest } from 'remote_apis/compiled-types/apis/contest';
import { useAddContest } from 'remote_apis/contest';

interface AddContestButtonProps {
  onSuccess?: () => void;
}

const AddContestButton = (props: AddContestButtonProps) => {
  const [visible, setVisible] = useState(false);

  const [addContest, setAddContest] = useState<Contest>();

  const addContestTrigger = useAddContest();

  const footer = (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button style={{ marginRight: 8 }} onClick={() => setVisible(false)}>
        取消
      </Button>
      <Button
        theme="solid"
        onClick={() => {
          addContestTrigger(addContest ?? {})
            .then(() => {
              setVisible(false);
              Toast.info('添加比赛成功');
              if (props.onSuccess) props.onSuccess();
            })
            .catch(() => {
              Toast.error('添加比赛失败');
            });
        }}
      >
        提交
      </Button>
    </div>
  );

  return (
    <>
      <Button theme="solid" onClick={() => setVisible(true)}>
        添加比赛
      </Button>
      <SideSheet
        title="请填写添加的比赛信息"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={footer}
      >
        <Form
          labelPosition={'left'}
          onChange={(value) =>
            setAddContest(value.values as unknown as Contest)
          }
        >
          <Form.Input field="title" label="比赛标题" />
          <Form.TextArea field="description" label="比赛描述"></Form.TextArea>
          <Form.Select field="type" label="比赛类型" style={{ width: '100%' }}>
            <Select.Option value={1}>IOI</Select.Option>
            <Select.Option value={2}>ACM</Select.Option>
            <Select.Option value={3}>FC</Select.Option>
          </Form.Select>
          <Form.DatePicker
            type="dateTime"
            field="startTime"
            label="开始时间"
            style={{ width: '100%' }}
          ></Form.DatePicker>
          <Form.DatePicker
            type="dateTime"
            field="endTime"
            label="结束时间"
            style={{ width: '100%' }}
          ></Form.DatePicker>
          <Form.InputNumber
            field="extraTime"
            label="比赛加时"
            style={{ width: '100%' }}
          ></Form.InputNumber>
        </Form>
      </SideSheet>
    </>
  );
};

export default memo(AddContestButton);
