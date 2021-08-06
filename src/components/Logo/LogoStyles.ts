import styled, { keyframes, css } from 'styled-components';
import { ReactComponent as AppLogo } from '../../assets/svgs/logo.svg';
import { ReactComponent as AppName } from '../../assets/svgs/name.svg';

const drawAnimation = keyframes`
    from {
      stroke-dashoffset: 100;
    }
    to {
      opacity: 1;
      stroke-dashoffset: 0;
    }
`;

const shakeAnimation = keyframes`
    0%, 100%{
      opacity: 1;
      transform: rotateZ(0deg);
    }

    33.33% {transform: rotateZ(-5deg);}

    66.66% {transform: rotateZ(5deg);}
`;

const slideAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const appearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledAppLogo = styled(AppLogo)``;

export const StyledAppName = styled(AppName)``;

export const StyledLogoContainer = styled.div<{
	animate?: boolean;
	incname?: boolean;
}>`
	justify-content: center;
	display: flex;
	flex-direction: column;
	${StyledAppLogo} {
		width: 100%;
		${({ incname }) => (incname ? `flex: 0 0 80%;` : `flex: 0 0 100%;`)}
		${({ animate }) =>
			animate &&
			css`
				&:hover {
					#line {
						stroke-dasharray: 100;
						animation: ${drawAnimation} 2s ease-in-out infinite;
					}
					#pen {
						animation: ${shakeAnimation} 1s linear infinite;
						transform-origin: center;
						transform-box: fill-box;
					}
				}
				#line {
					opacity: 0;
					stroke-dasharray: 100;
					animation: ${drawAnimation} 2s linear 1 1.5s forwards;
				}
				#pen {
					opacity: 0;
					animation: ${shakeAnimation} 1s 2 linear 1.5s forwards;
					transform-origin: center;
					transform-box: fill-box;
				}
				#page {
					animation: ${slideAnimation} 1s ease 1;
				}
			`}
	}
	${StyledAppName} {
		flex: 0 0 20%;
		width: 100%;
		margin-top: 1rem;
		${({ incname }) => (incname ? `` : `display: none;`)}
		${({ animate }) =>
			animate &&
			css`
				opacity: 0;
				animation: ${appearAnimation} 1s ease-in 1.5s forwards;
			`}
	}
`;
