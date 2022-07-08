import styled from 'styled-components';

export const Quotes = (props) => {

    const { speaker, quote } = props;

    return (
        <Content>
            <div>
                <p>{quote}</p>
                <p>{speaker}</p>
                <button>Quote</button>
            </div>
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