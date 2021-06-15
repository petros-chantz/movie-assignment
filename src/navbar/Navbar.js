import React from "react";
import {
  NavbarWrapper,
  LogoContainer,
  LogoText,
  FormContainer,
  SearchBar,
} from "./NavbarStyling";

export default function Navbar(props) {
  return (
    <NavbarWrapper>
      <LogoContainer>
        <LogoText>Movies</LogoText>
      </LogoContainer>
      <FormContainer>
        <form onSubmit={props.onFormSubmit}>
          <SearchBar
            type="text"
            value={props.term}
            onChange={props.onInputChange}
            placeholder="Search a movie..."
          />
        </form>
      </FormContainer>
    </NavbarWrapper>
  );
}
