import { StyledHeader } from "./Styles/Header.styled"


const Header = ({ title, fontSize }) => {
  return (
    <StyledHeader>
      <h1 style={{ fontSize: fontSize }}>{title}</h1>
    </StyledHeader>
  )
}

export default Header