import { Container, Icon, IconContainer, MailAddress, MailAddressContent, MailIconContainer, Title } from "./styles";
import mailIcon from '../../assets/img/icons/envelope.svg';
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export function ContactComponent() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { i18n } = useTranslation()

    return(
        <Container>
            <Title>{t('contact.title')}</Title>
            <MailIconContainer>
                <IconContainer>
                    <Icon src={mailIcon}></Icon>
                </IconContainer>

                <MailAddressContent>
                    <MailAddress>
                        <span>{t('contact.email')}</span>
                    </MailAddress>
                </MailAddressContent>
                
            </MailIconContainer>
        </Container>
    );
}