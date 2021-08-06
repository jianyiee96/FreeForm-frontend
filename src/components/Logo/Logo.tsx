import {
	StyledLogoContainer,
	StyledAppLogo,
	StyledAppName,
} from './LogoStyles';

type LogoProps = {
	animate?: boolean;
	incName?: boolean;
	height: string;
};

const Logo = ({
	animate = false,
	incName = false,
	height,
}: LogoProps): JSX.Element => {
	return (
		<StyledLogoContainer animate={animate} incname={incName} height={height}>
			<StyledAppLogo />
			<StyledAppName />
		</StyledLogoContainer>
	);
};

export default Logo;
