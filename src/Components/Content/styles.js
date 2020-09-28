import Styled from 'styled-components';

const StyledContent = Styled.div`
    display: flex;
    div {
        padding: 100px;
        h1 {
            color: black;
        }
        p {
            color: var(--dark-gray);
        }
        span {
            display: block;
            margin-top: 50px;
            font-size: 24px;
            color: black;
        }
    }
`;

export default StyledContent;