import logoDarkSvg from '../assets/logo_dark.svg';
import logoSvg from '../assets/logo.svg';
import { CSSProperties } from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  type?: 'dark' | 'light';
  style?: CSSProperties;
}

export const Logo = (props: LogoProps) => (
  <>
    <img
      src={props.type === 'light' ? logoSvg : logoDarkSvg}
      alt="logo"
      style={{ objectFit: 'contain', width: 'fit-content', ...props.style }}
      {...props}
    ></img>
  </>
);
