import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import { lighten, darken } from 'polished';

export const StyledButton = styled(Button)<{
	$fontColor: string;
	$backgroundColor: string;
	$minWidth: string | undefined;
	$minHeight: string | undefined;
	$textTransform: 'uppercase' | 'lowercase' | 'capitalize' | undefined;
}>`
	&& {
		${({ $minWidth }) => $minWidth && `min-width: ${$minWidth};`}
		${({ $minHeight }) => $minHeight && `min-height: ${$minHeight};`}
		${({ $textTransform }) =>
			($textTransform && `text-transform: ${$textTransform};`) ||
			`text-transform: none`}
	}
	${({ variant, $backgroundColor, $fontColor }) =>
		(variant === 'text' &&
			css`
				&& {
					color: ${$backgroundColor};
				}
			`) ||
		(variant === 'outlined' &&
			css`
				&& {
					color: ${$backgroundColor};
					border-color: ${$backgroundColor};
				}
			`) ||
		((variant === 'contained' || variant === undefined) &&
			css`
				&& {
					color: ${$fontColor};
					background-color: ${$backgroundColor};
					:hover {
						color: ${lighten(0.1, $fontColor)};
						background-color: ${darken(0.1, $backgroundColor)};
					}
				}
			`)}
`;
