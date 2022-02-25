import styled from 'styled-components';
import { secondary, primary, themeColor } from '../../assets/color-p';
import { fontPrimary, fontSecondary, lightSpacing, smallestSize } from '../../assets/typography';
import { smallScreenSize } from '../../assets/screen-settings';

export const Container = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	@media screen and (max-width: ${smallScreenSize}) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const Title = styled.h1`
	font-size: 2.2em;
	color: #fff;
	font-family: ${fontPrimary};
`;

export const FirstName = styled.span`
	margin-right: 10px;
	color: ${secondary};
	font-family: ${fontPrimary};
` ;

export const SecondName = styled.span`
	color: ${primary};
	font-family: ${fontPrimary};
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2px;

  @media screen and (max-width: ${smallScreenSize}) {
	  display: none;
  }
`;

export const MenuItem = styled.li`
    display: inline;
    cursor: pointer;
    padding: ${lightSpacing};
    font-family: ${fontPrimary};
	color: ${secondary};
	transition: filter 0.2s;
	padding: 5px;
	font-size: ${smallestSize};
	transition: all 0.5s;

    &:hover{
		color: ${themeColor}
    }
`;

export const TitleContent = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

export const TranslateOptions = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	gap: 10px;
`;

export const Option = styled.span`
	color: ${secondary};
	font-size: ${smallestSize};
	cursor: pointer;
	font-family: ${fontSecondary};
	transition: all 0.5s;

	&:hover {
		color: ${primary}
	}
`;

export const Quote = styled.span`
	font-size: ${smallestSize};
	color: ${secondary};
`;

export const NavigationBar = styled.nav`
	width: 100%;
	min-height: 45px;
	position: fixed;
	z-index: 2;
	top: -100px;
	transition: all 0.5s;
	background-color: rgba(0, 0, 0, 0.4);

	@media screen and (max-width: ${smallScreenSize}) {
	  display: none;
	}
`;

export const NavBarContainer = styled.div`
	max-width: 75%;
	margin: 0 auto;
	display: flex;
	justify-content: flex-end;
`;

export const MenuNavBar = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:15px;

  @media screen and (max-width: ${smallScreenSize}) {
	  display: none;
	  flex-direction: column;
	  gap: 15px
  }
`;

export const MenuNavBarItem = styled.li`
    display: inline;
    cursor: pointer;
    padding: ${lightSpacing};
    font-family: ${fontPrimary};
	font-size: 1.2em;
	font-weight: bold;
	color: #FFF;
	transition: filter 0.2s;
	padding: 5px;
	transition: all 0.5s;

    &:hover{
		color: ${themeColor}
    }
`;