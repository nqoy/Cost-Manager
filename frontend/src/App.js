import Costs from "./Components/Costs";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import LoginForm from "./Components/LoginForm";
import { Flex } from "./Components/Styles/Flex";
import CostsGraph from "./Components/CostsGraph";
import FilterForm from "./Components/FilterForm";
import wavesBackground from "./Assets/waves.mp4";
import AddCostForm from "./Components/AddCostForm";
import { Button, FormButton } from "./Components/Button";
import { MainContainer, CostContainer, BackgroundContainer } from "./Components/Styles/Container.styled";

function App() {

  const [costsData, setCostsData] = useState([]);
  const [userIdentifier, setUserIdentifier] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);


  const onClickAdd = () => { setShowAddForm(!showAddForm) }
  const onClickLogout = () => {
    window.localStorage.setItem("USER_ID", "")
    setUserIdentifier(null);
  }

  useEffect(() => {
    console.log(userIdentifier)
    window.localStorage.setItem("USER_ID", JSON.stringify(userIdentifier))
  }, [userIdentifier])


  //General Options
  const monthsOptoins = ['All', 'January', 'February', 'March', 'April', 'May', 'July',
    'June', 'August', 'September', 'October', 'November', 'December'];
  const categoryOptions = ['House', 'Food', 'Health', 'Sport', 'Education', 'Hobbies'];
  const currentDate = new Date();
  //General Options

  return (

    <>
      <Header title="Cost Manager" />
      <BackgroundContainer>
        <video autoPlay loop muted>
          <source src={wavesBackground} type={"video/mp4"}></source>
        </video>
        {!userIdentifier && <LoginForm setUserIdentifier={setUserIdentifier} />}
        {userIdentifier && <MainContainer className="MainApp">
          {!showAddForm && <FormButton
            onClick={() => onClickLogout()}
            backgroundColor={"black"}
            text={"Logout"}
            minWidth={"60px"}
            minHeight={"25px"}
          >Logout</FormButton>}
          <Button
            className="AddButton"
            text={!showAddForm ? "Add Cost" : "Cancel"}
            onClick={onClickAdd}
            backgroundColor={!showAddForm ? "steelblue" : "#C41E3A"}
          ></Button>
          {showAddForm && <AddCostForm
            categoryOptions={categoryOptions}
            currentDate={currentDate}
            monthOptions={monthsOptoins} />}
          <Flex className="ContainersFlex">
            <CostContainer>
              <label>Costs</label>
              <Costs costs={costsData} />
            </CostContainer>
            <FilterForm
              monthsOptoins={monthsOptoins}
              currentDate={currentDate}
              setCostsData={setCostsData}
              costsData={costsData}
              userIdentifier={userIdentifier}
            ></FilterForm>
            <CostsGraph costsData={costsData} />
          </Flex>
        </MainContainer>}
      </BackgroundContainer>
    </>
  );
}

export default App;
