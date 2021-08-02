import { StyledLogoContainer, StyledAppLogo } from './LogoStyles';
import { ReactComponent as AppLogo } from '../../assets/svgs/logo.svg';

type LogoProps = {
	animate?: boolean;
	height: string;
};

const Logo = ({ animate = false, height }: LogoProps): JSX.Element => {
	return (
		<StyledLogoContainer>
			{animate ? (
				<StyledAppLogo style={{ height: `${height}` }} />
			) : (
				<AppLogo style={{ height: `${height}` }} />
			)}
		</StyledLogoContainer>
	);
};

export default Logo;
