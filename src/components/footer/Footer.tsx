import { t } from "i18next";
import { Content, Description, FooterContainer } from "./styles";

export function FooterComponent() {

    return(
        <FooterContainer>
            <Content>
                <Description>{t('footer.description')}</Description>
            </Content>
        </FooterContainer>
    );
}