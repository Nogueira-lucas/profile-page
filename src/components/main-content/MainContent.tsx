import { Container, Description, IconsContainer, MediaIcon, Photo, Title } from './styles';
import perfilImage  from '../../assets/img/perfil.jpeg';
import githubIcon   from '../../assets/img/github.svg';
import linkedinIcon from '../../assets/img/linkedin.svg';
import twitterIcon  from '../../assets/img/twitter.svg';

import { Animated } from "react-animated-css";
import { t } from 'i18next';
import { linkedinPath, twitterPAth, githubPath} from '../../environments'
import { useTranslation } from 'react-i18next';


export function MainContentComponent() {
    const { i18n } = useTranslation()

    const animation = 'flipInX'
    
    return(
        <Container>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <Photo src={perfilImage} alt="foto de perfil de homem neigro de dreads"></Photo>
            </Animated>
            
            <Title>@lks_nogueira</Title>
            <Description>{t('main.freelancer')} | {t('main.developer')} | {t('main.ui')} | {t('main.engineer')} </Description>
            
                <IconsContainer>
                    <Animated animationIn={animation} animationOut="fadeOut" isVisible={true}>
                        <a href={githubPath}><MediaIcon src={githubIcon}></MediaIcon></a>
                    </Animated>

                    <Animated animationIn={animation} animationOut="fadeOut" isVisible={true}>
                        <a href={twitterPAth}><MediaIcon src={twitterIcon}></MediaIcon></a>
                    </Animated>

                    <Animated animationIn={animation} animationOut="fadeOut" isVisible={true}>
                        <a href={linkedinPath}><MediaIcon src={linkedinIcon}></MediaIcon></a>
                    </Animated>
                </IconsContainer>
            
        </Container>
        
    );
}