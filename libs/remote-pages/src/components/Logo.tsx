import logoSvg from '../assets/logo_dark.svg';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo = (props: LogoProps) => (
  <>
    <img
      src={logoSvg}
      alt="logo"
      style={{ objectFit: 'contain', width: 'fit-content' }}
      {...props}
    ></img>
  </>
);
