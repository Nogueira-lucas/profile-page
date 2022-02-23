import styled from 'styled-components';
import { secondary } from '../../assets/color-p';
import { fontPrimary, fontSecondary, smallestSize } from '../../assets/typography';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-family: ${fontSecondary};
    text-align: center;
    color: ${secondary};
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 15px;

    @media screen and (max-width: ${smallestSize}) {
        flex-direction: column;
        text-align: center;
    }
`;

export const IssueIcon = styled.img`
    width: 15vw;
    height: 15vh;
`;

export const Description = styled.span`
    font-size: 1.2em;
    color: ${secondary};
    font-family: ${fontPrimary};
    color: ${secondary};

    @media screen and (max-width: ${smallestSize}) {
        text-align: center;
    }
`;