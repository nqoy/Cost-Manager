import { StyledCost } from "./Styles/Cost.styled"

const Cost = ({ cost }) => {
  return (
    <StyledCost>
      <h3 style={{ marginLeft: "1%", marginTop: "1%", paddingTop: "2px" }}>{cost.category}</h3>
      <p style={{ marginLeft: "1%", marginBottom: "1.3%", paddingBottom: "1px" }}>{cost.sum}$ - {cost.description}</p>
    </StyledCost>
  )
}

export default Cost
