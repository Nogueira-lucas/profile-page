import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Content, Description, FooterContainer } from "./styles";

export function FooterComponent() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { i18n } = useTranslation()

    return(
        <FooterContainer>
            <Content>
                <Description>{t('footer.description')}</Description>
            </Content>
        </FooterContainer>
    );
}