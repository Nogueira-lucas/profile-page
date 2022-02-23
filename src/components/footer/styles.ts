import styled from 'styled-components';
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
    color: #fff;
    font-size: 1.2em;
`;