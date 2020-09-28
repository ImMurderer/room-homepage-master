import Styled from 'styled-components';

const StyledFooter = Styled.footer`
    display: flex;
    flex-direction: ${({ width }) => width > 375 ? 'row' : 'column'};
    section {
        padding: ${({ width }) => width > 375 ? '50px' : '30px'};
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