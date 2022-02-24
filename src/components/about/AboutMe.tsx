import { Container, Title, BoxContainer, Photo, Description, Content, Paragraph } from "./styles";
import photoPath from '../../assets/img/profile-about.jpg';

import { t } from 'i18next';
import { useTranslation } from "react-i18next";

export function AboutMeComponent() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { i18n } = useTranslation()

    return (
        <Container>
            <BoxContainer>
                <Title>{t('about.title')}</Title>

                <Content>
                    <Photo src={photoPath}></Photo>
                    <Description>
                        <Paragraph>
                            {t('about.glad')}
                        </Paragraph>
                        <Paragraph>
                            {t('about.description')}
                        </Paragraph>
                    </Description>
                </Content>
            </BoxContainer>
        </Container>
    )
}