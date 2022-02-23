import { Container, Description, IconsContainer, MediaIcon, Photo, Title } from './styles';
import perfilImage  from '../../assets/img/perfil.jpeg';
import githubIcon   from '../../assets/img/github.svg';
import linkedinIcon from '../../assets/img/linkedin.svg';
import twitterIcon  from '../../assets/img/twitter.svg';

import { Animated } from "react-animated-css";
import { t } from 'i18next';

// fadeInDown

export function MainContentComponent() {

    return(
        <Container>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <Photo src={perfilImage} alt="foto de perfil de homem neigro de dreads"></Photo>
            </Animated>
            
            <Title>@lks_nogueira</Title>
            <Description>{t('main.freelancer')} | {t('main.developer')} | {t('main.ui')} | {t('main.engineer')} </Description>
            <IconsContainer>
                <MediaIcon src={githubIcon}></MediaIcon>
                <MediaIcon src={twitterIcon}></MediaIcon>
                <MediaIcon src={linkedinIcon}></MediaIcon>
            </IconsContainer>
        </Container>
        
    );
}