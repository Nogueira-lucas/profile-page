import { Container, Icon, IconContainer, MailAddress, MailAddressContent, MailIconContainer, Title } from "./styles";
import mailIcon from '../../assets/img/icons/envelope.svg';
import { t } from "i18next";

export function ContactComponent() {
    
    return(
        <Container>
            <Title>{t('contact.title')}</Title>
            <MailIconContainer>
                <IconContainer>
                    <Icon src={mailIcon}></Icon>
                </IconContainer>

                <MailAddressContent>
                    <MailAddress>
                        <span>lucasnogueiratdm@hotmail.com</span>
                    </MailAddress>
                </MailAddressContent>
                
            </MailIconContainer>
        </Container>
    );
}