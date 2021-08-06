import {
	StyledLogoContainer,
	StyledAppLogo,
	StyledAppName,
} from './LogoStyles';

type LogoProps = {
	animate?: boolean;
	incName?: boolean;
	className?: string;
};

const Logo = ({
	animate = false,
	incName = false,
	className,
}: LogoProps): JSX.Element => {
	return (
		<StyledLogoContainer
			animate={animate}
			incname={incName}
			aria-label="logo-container"
			className={className}
		>
			<StyledAppLogo />
			<StyledAppName />
		</StyledLogoContainer>
	);
};

export default Logo;
