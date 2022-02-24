import { Container, Title, BoxContainer, Photo, Description, Content } from "./styles";
import photoPath from '../../assets/img/profile-about.jpg';

import { t } from 'i18next';
import { useTranslation } from "react-i18next";

export function AboutMeComponent() {

    const { i18n } = useTranslation()

    return (
        <Container>
            <BoxContainer>
                <Title>{t('about.title')}</Title>

                <Content>
                    <Photo src={photoPath}></Photo>
                    <Description>
                        <p>
                            {t('about.glad')}
                        </p>
                        <p>
                            {t('about.description')}
                        </p>
                    </Description>
                </Content>
            </BoxContainer>
        </Container>
    )
}