import styled from "styled-components";
import { secondary } from '../../assets/color-p';
import { fontPrimary, largestSize, smallestSize } from '../../assets/typography';

export const MainContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const BoxContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 55px;

    @media screen and (max-width: ${smallestSize}) {
        width: 100%;
    }
`;

export const Title = styled.span`
    font-family: ${fontPrimary};
    color: ${secondary};
    font-size: ${largestSize};
    font-weight: bold;
    text-align: center;
    margin-bottom: ${largestSize};
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 22px;
    flex-wrap: wrap;
`;

export const FigCaption = styled.figcaption`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FigDescription = styled.span`
    font-family: ${secondary};
    font-size: 1.2em;

    @media screen and (max-width: ${smallestSize}){
        font-size: 1em;
    }
`;

export const Icon = styled.img`
    width: 66px;
    height: 66px;
`;