import { BoxContainer, FigCaption, FigDescription, Icon, IconsContainer, MainContainer, Title } from "./styles";
import javascript from '../../assets/img/icons/js.svg';
import angular from '../../assets/img/icons/angular.svg';
import aws from '../../assets/img/icons/aws.svg';
import css from '../../assets/img/icons/css.svg';
import java from '../../assets/img/icons/java.svg';
import html from '../../assets/img/icons/html.svg';
import sass from '../../assets/img/icons/sass.svg';
import react from '../../assets/img/icons/react.svg';
import { t } from "i18next";
import { useTranslation } from "react-i18next";


export function SkillsComponent() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { i18n } = useTranslation()

    return (
        <MainContainer>
            <BoxContainer>
                <Title>{t('skills.title')}</Title>
                <IconsContainer>
                    <FigCaption>
                        <Icon src={angular} alt="angular"></Icon>
                        <FigDescription>Angular</FigDescription>
                    </FigCaption>
                    <FigCaption>
                        <Icon src={react} alt="react"></Icon>
                        <FigDescription>ReactJS</FigDescription>
                    </FigCaption>
                    <FigCaption>
                        <Icon src={html} alt="html"></Icon>
                        <FigDescription>HTML5</FigDescription>
                    </FigCaption>
                    <FigCaption>
                        <Icon src={css} alt="css"></Icon>
                        <FigDescription>CSS3</FigDescription>
                    </FigCaption>
                    <FigCaption>
                        <Icon src={java} alt="java enterprise edition"></Icon>
                        <FigDescription>Java EE</FigDescription>
                    </FigCaption>
                    <FigCaption>
                        <Icon src={aws} alt="Amazon web services"></Icon>
                        <FigDescription>AWS Services</FigDescription>
                    </FigCaption>
                    <FigCaption>
                        <Icon src={sass} alt="Sass"></Icon>
                        <FigDescription>Sass</FigDescription>
                    </FigCaption>
                    <FigCaption>
                        <Icon src={javascript} alt="javascript"></Icon>
                        <FigDescription>Javascript</FigDescription>
                    </FigCaption>
                </IconsContainer>
            </BoxContainer>
        </MainContainer>
    );
}