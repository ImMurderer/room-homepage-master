import Styled from 'styled-components';

const StyledFooter = Styled.div`
    display: flex;
    div {
        padding: 50px;
        h3 {
            margin-bottom: 0px;
            text-transform: uppercase;
            letter-spacing: 5px;
            font-weight: 700;
        }
        p {
            font-weight: 500;
            color: var(--dark-gray);
            line-height: 20px;
        }
    }
`

export default StyledFooter;