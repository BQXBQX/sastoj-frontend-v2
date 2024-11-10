import styled from 'styled-components';
import * as variables from '../const/Variable';
import { Logo } from '../components/Logo';

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
`;

export default function Login() {
  return (
    <>
      <LeftContainer>
        <Logo height={56}></Logo>
        <span>
          <strong>Supported by Module Federation</strong>
        </span>
      </LeftContainer>
    </>
  );
}
