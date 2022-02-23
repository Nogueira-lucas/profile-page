import { Container, Content, Description, IssueIcon, Title } from "./styles";
import worthImageOne from '../../assets/img/icons/worth-one.svg';
import worthImageTwo from '../../assets/img/icons/worth-two.svg'
import { t } from "i18next";

export function WorthComponent() {

    return(
        <Container>
            <Title>{t('worthies.title')}</Title>
            <Content>
                <Content>
                    <IssueIcon src={worthImageTwo}></IssueIcon>
                    <Description>{t('worthies.deli')}</Description>
                </Content>
                <Content>
                    <IssueIcon src={worthImageOne}></IssueIcon>
                    <Description>{t('worthies.code')}</Description>
                </Content>
            </Content>
        </Container>
    );
}