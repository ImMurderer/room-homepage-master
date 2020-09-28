import Styled from 'styled-components';

const StyledHeader = Styled.nav`
    position: fixed;
    left: ${({ width }) => width > 375 ? '60px' : '0'};
    top: 50px;
    display: flex;
    flex: 1;
    width: ${({ width }) => width > 375 ? '350px' : '100%'};
    height: 20px;
    padding: 0;
    justify-content: ${({ width }) => width > 375 ? 'space-between' : 'space-around'};
    align-items: flex-end;
    z-index: 2;
    #logo {
        display: ${({ width, menuOpen }) => width > 375 && menuOpen ? 'none' : 'block'};
        margin-right: ${({ width }) => width > 375 ? '50px' : '0px'};
        width: 62px;
        height: 14px;
    }
    #hamburger {
        display: ${({ width }) => width > 375 ? 'none' : 'block'};
        position: absolute;
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        outline: 0;
        left: 30px;
        top: 5px;
        z-index:2;
    }
    #menu {
        transition: display 2s;
        display: ${({ width, menuOpen }) => width > 375 || menuOpen ? 'flex' : 'none'};
        justify-content: space-between;
        align-items: flex-end;
        margin-left: ${({ width, menuOpen }) => width > 375 && menuOpen ? '25px' : '0'};
        width: ${({ width, menuOpen }) => width > 375 && menuOpen ? '350px' : '250px'};
        &:before {
            content: '';
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 125px;
            background-color: ${({ width, menuOpen }) => width > 375 && !menuOpen ? 'transparent' : 'white'};
        }
        a {
            color: ${({ width, menuOpen }) => width > 375 && !menuOpen ? 'white' : 'black'};
            font-weight: 700;
            font-size: 12px;
            z-index: 2;
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
                border-bottom: 2px solid ${({ width, menuOpen }) => width > 375 && !menuOpen ? 'white' : 'black'};
            }
        }
    }
`;

export default StyledHeader;