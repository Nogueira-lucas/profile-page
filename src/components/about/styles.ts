import styled from "styled-components";
import { primary } from "../../assets/color-p";
import { smallScreenSize } from "../../assets/screen-settings";
import { fontPrimary, largestSize } from "../../assets/typography";

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const BoxContainer = styled.div`
    margin: 0 auto;
    border: 1px solid #C4C4C4;
    background-color: #C4C4C4;
    width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3%;

    @media screen and (max-width: ${smallScreenSize}) {
        width: 100%;
        padding: 5vw;
    }
`;

export const Title = styled.h1`
    font-family: ${fontPrimary};
    color: ${primary};
    font-size: ${largestSize};
    text-align: center;
`;

export const Photo = styled.img`
    width: 200px;
    height: 250px;

    @media screen and (max-width: ${smallScreenSize}) {
        display: none;
    }
`;

export const Description = styled.p`
    font-family: ${fontPrimary};
    font-size: 1.2em;
    width: 550px;
    line-height: 2.1em;

    &:span {
        margin-bottom: 10px;
    }

    @media screen and (max-width: ${smallScreenSize}) {
        width: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 35px;

    @media screen and (max-width: ${smallScreenSize}) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 35px;
    }
`;

