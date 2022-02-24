import styled from 'styled-components';
import { backgroundColorB, backgroundColorC, primary, secondary } from '../../assets/color-p';
import { smallScreenSize } from '../../assets/screen-settings';
import { fontPrimary, largestSize, lightSpacing } from '../../assets/typography';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Title = styled.div`
    font-family: ${fontPrimary};
    color: ${secondary};
    font-size: ${largestSize};
    text-align: center;
    font-weight: bold;
`;


export const MailIconContainer = styled.div`
    margin-top: ${lightSpacing};
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${backgroundColorC};

    @media screen and (max-width: ${smallScreenSize}) {
        flex-direction: column;
    }
`;

export const IconContainer = styled.div`
    min-height: 250px;
    max-width: 50%;
    min-width: 160px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: ${smallScreenSize}) {
        min-height: 30px;
        max-width: 50%;
        min-width: 100%;
    }

    @media screen and (min-width: ${smallScreenSize}) {
        background-color: ${backgroundColorB}
    }
`;

export const Icon = styled.img`
    width: 18vw;
    height: 18vh;
`;

export const MailAddressContent = styled.div`
    display: flex;
    flex-direction: column;
    color: ${primary};
`;

export const MailAddress = styled.span`
    font-size: ${largestSize};
    font-family: ${fontPrimary};
    padding: 55px;
`;

// export const MailSenderContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-end;
//     border: 1px solid;
//     display: flex;
// `;

// export const SenderIcon = styled.img`
//     width: 35px;
//     height: 35px;
// `;