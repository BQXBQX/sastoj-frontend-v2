import styled from 'styled-components';
import * as variables from '../const/Variable';
import { Logo } from '../components/Logo';
import { Button, Input } from '@douyinfe/semi-ui';
import { IconKey, IconUser } from '@douyinfe/semi-icons';
import { useCallback, useState } from 'react';
import { useSWRLogin } from 'remote_apis/auth';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  background: ${variables.BLACK_BACKGROUND};
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${variables.WHITE};

  @media screen and (max-width: ${variables.MOBILE_WIDTH}) {
    display: none;
  }
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  background: ${variables.WHITE_BACKGROUND};
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${variables.BLACK};
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'lato-bold';
  color: ${variables.BLACK};
  margin: 0.4rem;
`;

export interface LoginProps {
  title?: string;
}

export default function Login(props: LoginProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginTrigger = useSWRLogin();

  const handleClick = useCallback((username: string, password: string) => {
    loginTrigger(username, password);
  }, []);

  return (
    <Container>
      <LeftContainer>
        <Logo height={56}></Logo>
        <span>
          <strong>Supported by Module Federation</strong>
        </span>
      </LeftContainer>
      <RightContainer>
        <Title>{props.title}</Title>
        <span>This is SAST Online Judge Dashboard</span>
        <Input
          style={{ width: '70%' }}
          size="large"
          prefix={<IconUser />}
          value={username}
          onChange={setUsername}
        ></Input>
        <Input
          style={{ width: '70%' }}
          size="large"
          prefix={<IconKey />}
          mode="password"
          value={password}
          onChange={setPassword}
        ></Input>
        <Button
          style={{ width: '70%', background: `${variables.BLACK_BACKGROUND}` }}
          theme="solid"
          size="large"
          onClick={() => handleClick(username, password)}
        >
          Login
        </Button>
      </RightContainer>
    </Container>
  );
}
