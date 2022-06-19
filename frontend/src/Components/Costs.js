import Cost from "./Cost"

const Costs = ({ costs }) => {
  return (
    <>
      {costs?.map((cost) => (
        <Cost className="Costs" key={cost._id} cost={cost} />
      ))}
    </>

  )
}

export default Costs