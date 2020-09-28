import Styled from 'styled-components';

const StyledContent = Styled.div`
    display: flex;
    div {
        position: relative;
        padding: 100px;
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
            left: 0;
            bottom: 0;
            button {
                background-color: black;
                border: 0;
                outline: 0;
                width: 80px;
                height: 80px;
                &:hover {
                    background-color: var(--very-dark-gray);
                }
            }
        }
    }
`;

export default StyledContent;