import { Container, MediaContainer, MediaFigure, Title } from "./styles";
import fiverrImage from '../../assets/img/fiverr.jpg'
import upworkImage from '../../assets/img/upwork.png'
import { t } from "i18next";

export function HireMeComponent() {
    
    return(
        <Container>
            <Title>{t('hire.title')}</Title>
            <MediaContainer>
                <MediaFigure src={fiverrImage}></MediaFigure>
                <MediaFigure src={upworkImage}></MediaFigure>
            </MediaContainer>
        </Container>
    );
}