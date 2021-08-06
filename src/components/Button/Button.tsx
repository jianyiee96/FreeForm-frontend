import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledButton } from './ButtonStyles';

type ButtonProps = {
	children?: React.ReactNode;
	type?: 'primary' | 'secondary' | 'third';
	variant?: 'text' | 'outlined' | 'contained' | undefined;
	minWidth?: string;
	minHeight?: string;
	textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | undefined;
};

const Button = ({
	children,
	type = 'primary',
	variant,
	minWidth,
	minHeight,
	textTransform = undefined,
}: ButtonProps): JSX.Element => {
	const themeContext = useContext(ThemeContext);
	const { colors, fontColors } = themeContext;
	let backgroundColor;
	let fontColor;
	switch (type) {
		case 'secondary':
			backgroundColor = colors.secondary;
			fontColor = fontColors.secondary;
			break;
		case 'third':
			backgroundColor = colors.third;
			fontColor = fontColors.third;
			break;
		default:
			backgroundColor = colors.main;
			fontColor = fontColors.main;
	}

	return (
		<StyledButton
			variant={variant}
			$backgroundColor={backgroundColor}
			$fontColor={fontColor}
			$minWidth={minWidth}
			$minHeight={minHeight}
			$textTransform={textTransform}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
