import styled from 'styled-components';
import { secondary } from '../../assets/color-p';
import { smallScreenSize } from '../../assets/screen-settings';
import { fontPrimary } from '../../assets/typography';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: ${smallScreenSize}) {
        min-height: 0;
    }
`;

export const Title = styled.h1`
	font-size: 2.2em;
	color: ${secondary};
	font-family: ${fontPrimary};
`;

export const MediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;
    justify-content: space-between;

    @media screen and (max-width: ${smallScreenSize}) {
        flex-direction: column;
        align-items: center;
    }    
`;

export const MediaFigure = styled.img`
    min-width: 120px;
    cursor: pointer;

    @media screen and (max-width: ${smallScreenSize}) {
        width: 80vw;
    }
`;