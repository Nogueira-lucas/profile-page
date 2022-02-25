import { FirstName, SecondName, Title, Container, 
		Menu, MenuItem, TitleContent, TranslateOptions, Option, Quote, NavigationBar, NavBarContainer, MenuNavBar, MenuNavBarItem } from './styles';

import { t } from 'i18next'

import { useTranslation } from 'react-i18next'
import { Animated } from 'react-animated-css';

function isHiddenFunc() {
	let component = document.getElementById("navbar")
  
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	  if(component) {
		component.style.top = "0";
	  }
	} else {
	  if(component) {
		component.style.top = "-1000px";
	  }
	}
}
  
window.onscroll = () => { isHiddenFunc() }

const moveToHome = () => window.scrollTo(0, -573)
const moveToAbout = () => window.scrollTo(0, 538)
const moveToSkills = () => window.scrollTo(0, 1072)
const moveToContact = () => window.scrollTo(0, 1800)
const moveToHire = () => window.scrollTo(0, 2099)


export function HeaderComponent() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { i18n } = useTranslation()
	const animation = 'fadeInDown'

	return (
		<Container>

			<NavigationBar id="navbar">
				<NavBarContainer>
					<MenuNavBar>
						<MenuNavBarItem onClick={() => moveToHome()}>{t("menu.home")}</MenuNavBarItem>
						<MenuNavBarItem onClick={() => moveToAbout()}>{t("menu.about")}</MenuNavBarItem>
						<MenuNavBarItem onClick={() => moveToSkills()}>{t("menu.skills")}</MenuNavBarItem>
						<MenuNavBarItem onClick={() => moveToContact()}>{t("menu.contact")}</MenuNavBarItem>
						<MenuNavBarItem onClick={() => moveToHire()}>{t("menu.hire")}</MenuNavBarItem>
					</MenuNavBar>
				</NavBarContainer>
			</NavigationBar>

			<Animated animationIn={animation} animationOut="fadeOut" isVisible={true}>
				<TitleContent>
					<Title>
						<FirstName>Lucas</FirstName>
						<SecondName>Nogueira</SecondName>
					</Title>

					
						<TranslateOptions>
							<Option onClick={ () => i18n.changeLanguage('en') }>EN</Option> 
							<Quote>|</Quote> 
							<Option onClick={ () => i18n.changeLanguage('pt')}>PT-BR</Option>
						</TranslateOptions>
				</TitleContent>
			</Animated>

			<Animated animationIn={animation}  animationOut="fadeOut" isVisible={true}>
				<Menu>
					<MenuItem onClick={() => moveToHome()}>{t("menu.home")}</MenuItem>
					<MenuItem onClick={() => moveToAbout()}>{t("menu.about")}</MenuItem>
					<MenuItem onClick={() => moveToSkills()}>{t("menu.skills")}</MenuItem>
					<MenuItem onClick={() => moveToContact()}>{t("menu.contact")}</MenuItem>
					<MenuItem onClick={() => moveToHire()}>{t("menu.hire")}</MenuItem>
				</Menu>
			</Animated>
		</Container>
	)
}