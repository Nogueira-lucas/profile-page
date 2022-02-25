import { Container, MediaContainer, MediaFigure, Title } from "./styles";
import fiverrImage from '../../assets/img/fiverr.jpg'
import upworkImage from '../../assets/img/upwork.png'
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export function HireMeComponent() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { i18n } = useTranslation()
    
    return(
        <Container>
            <Title>{t('hire.title')}</Title>
            <MediaContainer>
                <MediaFigure src={fiverrImage} alt="fiverr link"></MediaFigure>
                <MediaFigure src={upworkImage} alt="upwork link"></MediaFigure>
            </MediaContainer>
        </Container>
    );
}