import { createGlobalStyle } from 'styled-components';
import bgImg from '../../src/images/istockphoto-1155463855-170667a.jpg';

export const GlobalStyle = createGlobalStyle `
    body{
        background: url(${bgImg}) center;
        color: #332c36;
        padding: 0;
        margin: 0;
        font-family: 'New Tegomin', serif;
        color: white;
    }
`;