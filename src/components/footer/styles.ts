import styled from 'styled-components';
import { secondary } from '../../assets/color-p';
import { fontPrimary, smallestSize } from '../../assets/typography';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 38px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Description = styled.p`
    text-align: center;
    font-family: ${fontPrimary};
    font-size: ${smallestSize};
    color: ${secondary};
    font-size: 1.2em;
`;