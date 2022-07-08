import { useState } from 'react';
import styled from 'styled-components';
import butcherImg from '../../images/Billy-Butcher-S3.webp';
import { Quotes } from '../../components';
import { getQuote } from '../../services';

export function App(){

    const [quoteState, setQuoteState ] = useState({ quote: 'ok', speaker: 'Speaker'});

    console.log(quoteState);

    const onUpdate = async () => {
        const quote = await getQuote();

        setQuoteState(quote);
    }

    return (
        <Content>
            <Quotes 
                //quote={quoteState.quote} 
                //speaker={quoteState.speaker} 
                {...quoteState}
                onUpdate={onUpdate}/>
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