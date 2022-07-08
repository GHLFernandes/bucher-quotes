import styled from 'styled-components';
import butcherImg from '../../images/Billy-Butcher-S3.webp';
import { Quotes } from '../../components';

export function App(){
    return (
        <Content>
            <Quotes quote={'Teste texto'} speaker={'speaker'}/>
            <ButcherImg src={butcherImg} alt='Billy Butcher stand and look to you.'/>
        </Content>
    );
}

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    aling-items: center;
`;

const ButcherImg = styled.img`
    max-width: 50vw;
    align-self: flex-end;
`