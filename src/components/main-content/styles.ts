import styled from "styled-components";
import { primary, secondary } from '../../assets/color-p';
import { smallScreenSize } from '../../assets/screen-settings';
import { fontPrimary, largestSize, mediumSpacing } from '../../assets/typography';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    :first-of-type {
        gap: 16px;
    }

    /* @media screen and (max-width: ${smallScreenSize}) {
        width: 100%;
    } */
`;
let smallSize = '200px';
let largeSize = '300px';

export const Photo = styled.img`
    border-radius: 50%;
    width: ${largeSize};
    height: ${largeSize};
    image-rendering: auto;
    border: 5px solid ${primary};

    @media screen and (max-width: ${smallScreenSize}) {
        width: ${smallSize};
        height: ${smallSize};
    }
`;

export const Title = styled.span`
    font-family: ${fontPrimary};
    color: ${secondary};
    font-size: ${largestSize};
    font-weight: bold;
`;

export const Description = styled.span`
    font-family: ${fontPrimary};
    color: ${secondary};
    font-size: large;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: ${smallScreenSize}) {
        margin: 16px;
        text-align: center;
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${mediumSpacing};
    align-items: center;
    justify-content: center;
`;

export const MediaIcon = styled.img`
    width: 33px;
    height: 33px;
    border: 1px solid ${primary};
    padding: 12px;
    border-radius: 50%;

    &:hover {
        background-color: #029e7487;
        cursor: pointer;
        transition: filter 2s;
    }

    & > svg {
        padding: 10px
    }
`;