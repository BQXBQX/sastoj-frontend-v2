import { IconUploadError } from '@douyinfe/semi-icons';
import { Button, Modal } from '@douyinfe/semi-ui';
import { useState } from 'react';
import styled from 'styled-components';

interface DeleteButtonProps {
  buttonTrigger: (onSuccess: () => void) => void;
  modelTitle: string;
  modalContent: string;
  children?: React.ReactNode;
}

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  gap: 0.6rem;
  align-items: center;
`;

export const DeleteButton = (props: DeleteButtonProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Button
        theme="outline"
        type="danger"
        onClick={() => {
          setVisible(true);
        }}
      >
        {props.children}
      </Button>
      <Modal
        title={
          <ModalTitle>
            <IconUploadError style={{ color: 'red' }} size="large" />
            <span>{props.modelTitle}</span>
          </ModalTitle>
        }
        visible={visible}
        onOk={() => {
          props.buttonTrigger(() => setVisible(false));
        }}
        okButtonProps={{ type: 'danger' }}
      >
        {props.modalContent}
      </Modal>
    </>
  );
};
