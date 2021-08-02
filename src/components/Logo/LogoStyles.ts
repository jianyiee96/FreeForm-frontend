import styled, { keyframes } from 'styled-components';
import { ReactComponent as AppLogo } from '../../assets/svgs/logo.svg';

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

export const StyledLogoContainer = styled.div`
	justify-content: center;
	display: flex;
	flex-direction: row;
`;

export const StyledAppLogo = styled(AppLogo)`
	flex: 1;
	pointer-events: none;
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
`;
