import Styled from 'styled-components';

const StyledHeader = Styled.div`
    position: fixed;
    left: 60px;
    top: 50px;
    display: flex;
    flex: 1;
    width: 350px;
    height: 20px;
    justify-content: space-between;
    align-items: flex-end;
    img {
        margin-right: 30px;
        width: 62px;
        height: 14px;
    }
    a {
        color: white;
        font-size: 12px;
        height: 13px;
        text-decoration: none;
        position: relative;
        text-transform: lowercase;

        &:active:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -5px;
            transform: translateX(50%);
            width: 50%;
            border-bottom: 2px solid white;
        }
    }
`;

export default StyledHeader;