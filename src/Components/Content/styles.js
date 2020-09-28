import Styled from 'styled-components';

const StyledContent = Styled.div`
    display: flex;
    flex-direction: ${({ width }) => width > 375 ? 'row' : 'column'};
    div {
        position: relative;
        padding: ${({ width }) => width > 375 ? '100px' : '30px'};
        width: ${({ width }) => width > 375 ? 'auto' : '100%'}
        h1 {
            color: black;
            font-size: 32px;
        }
        p {
            color: var(--dark-gray);
            line-height: 20px;
        }
        span {
            display: block;
            margin-top: 30px;
            font-size: 16px;
            color: black;
            text-transform: uppercase;
            letter-spacing: 5px;
            height: 20px;
            line-height: 20px;
            font-weight: 600;
            a {
                &:hover {
                    color: var(--dark-gray);
                    img {
                        filter: opacity(50%)
                    }
                }
                img {
                    margin-bottom: 2px;
                }
            }
        }
        .control-buttons {
            padding: 0;
            position: absolute;
            ${({ width }) => width > 375 ? 'left: 0' : 'right: 0'};
            ${({ width }) => width > 375 ? 'bottom: 0' : 'top: 0'};
            transform: translateY(${({ width }) => width > 375 ? '0' : '-100%'});
            button {
                background-color: black;
                border: 0;
                outline: 0;
                width: ${({ width }) => width > 375 ? '80px' : '50px'};
                height: ${({ width }) => width > 375 ? '80px' : '50px'};
                &:hover {
                    background-color: var(--very-dark-gray);
                }
            }
        }
    }
`;

export default StyledContent;