import { FirstName, SecondName, Title, Container, 
		Menu, MenuItem, TitleContent, TranslateOptions, Option, Quote } from './styles';

import { t } from 'i18next'

import { useTranslation } from 'react-i18next'
import { Animated } from 'react-animated-css';

export function HeaderComponent() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { i18n } = useTranslation()
	const animation = 'fadeInDown'

	return (
		<Container>
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
					<MenuItem>{t("menu.home")}</MenuItem>
					<MenuItem>{t("menu.about")}</MenuItem>
					<MenuItem>{t("menu.skills")}</MenuItem>
					<MenuItem>{t("menu.contact")}</MenuItem>
					<MenuItem>{t("menu.hire")}</MenuItem>
				</Menu>
			</Animated>
		</Container>
	)
}