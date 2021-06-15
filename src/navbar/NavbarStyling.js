import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  background-color: var(--bg-navbar);
  box-shadow: 0 2px 10px rgb(0 0 0 / 5%);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;

  @media screen and (max-width: 425px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr;
  }
`;

export const LogoContainer = styled.div`
  padding: 30px;

  @media screen and (max-width: 425px) {
    padding: 10px;
  }
`;

export const LogoText = styled.p`
  font-size: 2.25rem;
  font-weight: 400;
  letter-spacing: 2px;
  color: var(--text-primary);

  @media screen and (max-width: 425px) {
    font-size: 1.6rem;
  }
`;

export const FormContainer = styled.div`
  padding: 30px;

  @media screen and (max-width: 425px) {
    padding: 10px;
  }
`;

export const SearchBar = styled.input`
  background-color: var(--bg-primary);
  border: none;
  border-radius: 40px;
  padding: 10px 20px;
  width: 250px;
  outline: none;

  @media screen and (max-width: 320px) {
    width: 200px;
  }

  ::placeholder {
    color: var(--text-primary);
  }
`;
