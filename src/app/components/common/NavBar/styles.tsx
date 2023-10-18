import styled from "styled-components";

export const NavBarContainer = styled.div`
  padding: 17px 138px;

  .innerLayout{
      display: flex;
      justify-content: space-between;
    }
  
  @media (max-width: 786px) {
    padding: 4px
  }
}
`;

export const LogoContianer = styled.div``;

export const Nav = styled.nav`
  margin-top: 17px;

  .hamburger {
    position: absolute;
    right: 17px;
  }
  .menu {
    display: none;
    @media (max-width: 1092px) {
      display: block;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  text-align: center;

  @media (max-width: 1092px) {
    // display: none;
    display: ${(props) => props.show};
    right: 0;
    top: 60px;
    width: 100%;
    background: #eeee;
    position: absolute;
  }
`;

export const NavItem = styled.li`
  padding-left: 32px;
  .contactUs {
    background: blue;
    color: #fff;
    padding: 14px 35px;
    border-radius: 5px;
  }
  @media (max-width: 1092px) {
    margin-top: 40px;
  }
`;
