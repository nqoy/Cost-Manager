import Header from './Header';
import { FormButton } from './Button';
import { SmallFlex } from './Styles/Flex'
import { useState, useEffect } from 'react'
import { StyledInput } from './Styles/Input.Styled';
import { LoginContainer } from './Styles/Container.styled';

const LoginForm = ({ setUserId }) => {

    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [firstName, setFirstName] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");

    const [formErrors, setFormErrors] = useState({});
    const [isRegister, setIsRegister] = useState(false);
    const [pageMassage, setPageMassage] = useState("");

    useEffect(() => {
        const userid = window.localStorage.getItem("USER_ID");
        if (userid != "") {
            setUserId(JSON.parse(userid))
        }
    }, [])


    const onRegister = () => {
        const errors = {};

        if (!username.trim() || username.trim().length < 3) {
            errors.username = "Min 3 characters required";
        }
        if (!firstName.trim() || firstName.trim().length < 2) {
            errors.firstName = "Min 2 characters required";
        }
        if (!id.trim() || id.trim().length < 9) {
            errors.id = "Min 9 characters required";
        }
        if (!lastName.trim() || lastName.trim().length < 2) {
            errors.lastName = "Min 2 characters required";
        }
        if (!birthday.trim()) {
            errors.birthday = "Please choose a date";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            //const user = {username, id, firstName, lastName, maritalStatus, birthday};

            // fetch("http://localhost:5000/user/add", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(user)
            // }).then(() => {
            //     console.log("User added succesfully");
            // })
            clearFrom();
            setPageMassage("Registered Successfully");
            setIsRegister(!isRegister);
        }
    }

    const onLogin = () => {
        const errors = {};

        if (!username.trim() || username.trim().length < 3) {
            errors.username = "Min 3 characters required";
        }
        if (!id.trim() || id.trim().length < 9) {
            errors.id = "Min 9 characters required";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setPageMassage("Loading Profile...");
            const user = getUser();

            if (user != null) {
                setPageMassage("Login Successfully");
                setUserId("1234");//user.id
            }
            else { setPageMassage("Check login info"); }
        }
        else { setPageMassage(""); }
    }

    const getUser = async () => {
        // const user = await fetchUserFromDB();
        // return user;
    }

    const fetchUserFromDB = async () => {
        // const url = "http://localhost:5000/costs/usearname/" + "/password/";
        // const response = await fetch(url);
        // const data = response.json();
        // return data;
    }

    const clearFrom = () => {
        setPageMassage("");
        setFormErrors({});
        setFirstName("");
        setUsername("");
        setLastName("");
        setBirthday("");
        setId("");
    }

    return (
        <LoginContainer style={{
            height: !isRegister ? "250px" : "360px",
            maxWidth: !isRegister ? "25%" : "30%"
        }}>
            <Header title={"Login/Register"} fontSize={"12px"}></Header>
            <SmallFlex>
                <div className='FormControl' style={{ paddingTop: "10px" }}>
                    <label>Username</label>
                    <StyledInput className="Username">
                        <input
                            minLength={3}
                            type="text"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                        <p>{formErrors.username}</p>
                    </StyledInput>
                </div>
                {isRegister && <div className='FormControl' style={{ paddingTop: "10px" }}>
                    <label>First Name</label>
                    <StyledInput className="FirstName">
                        <input
                            type="text"
                            placeholder="First Name"
                            minLength={2}
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        ></input>
                        <p>{formErrors.firstName}</p>
                    </StyledInput>
                </div>}
            </SmallFlex>
            <SmallFlex>
                <div className='FormControl' style={{ paddingTop: "0px" }}>
                    <label>ID</label>
                    <StyledInput className="ID">
                        <input
                            type="number"
                            placeholder="ID"
                            minLength={9}
                            min={0}
                            required
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        ></input>
                        <p>{formErrors.id}</p>
                    </StyledInput>
                </div>
                {isRegister && <div className='FormControl' style={{ paddingTop: "0px" }}>
                    <label>Last Name</label>
                    <StyledInput className="LastName">
                        <input
                            type="text"
                            placeholder="Last Name"
                            minLength={2}
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        ></input>
                        <p>{formErrors.lastName}</p>
                    </StyledInput>
                </div>}
            </SmallFlex>
            {isRegister && <SmallFlex>
                <div className='FormControl' style={{ paddingTop: "5px" }}>
                    <label>Marital Status</label>
                    <StyledInput className="MaritalStatus">
                        <select
                            onChange={(e) => setMaritalStatus(e.target.value)}
                            style={{
                                minWidth: "140px",
                                marginRight: "7px",
                                marginBottom: "10px"
                            }}>
                            <option value={"Single"}>Single</option>
                            <option value={"Married"}>Married</option>
                            <option value={"Divorced"}>Divorced</option>
                            <option value={"Widowed"}>Widowed</option>
                        </select>
                    </StyledInput>
                </div>
                <div className='FormControl' style={{ paddingTop: "5px" }}>
                    <label>Birthday</label>
                    <StyledInput className="ID">
                        <input
                            type="date"
                            placeholder="Birthday"
                            required
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                        ></input>
                        <p>{formErrors.birthday}</p>
                    </StyledInput>
                </div>
            </SmallFlex>}
            <div className='FormControl' style={{ paddingTop: "0px" }}>
                <SmallFlex>
                    {!isRegister && <FormButton
                        className="LoginButton"
                        backgroundColor={"steelblue"}
                        text={"Login"}
                        minWidth={"100px"}
                        minHeight={"30px"}
                        onClick={onLogin}
                    ></FormButton>}
                    <FormButton
                        className="RegisterButton"
                        backgroundColor={!isRegister ? "steelblue" : "#C41E3A"}
                        text={!isRegister ? "Register" : "Cancel"}
                        minWidth={"100px"}
                        minHeight={"30px"}
                        onClick={() => { setIsRegister(!isRegister); clearFrom(); }}>
                    </FormButton>
                </SmallFlex>
                {isRegister && <FormButton
                    className="SubmitRegister"
                    backgroundColor={"steelblue"}
                    text={"Submit"}
                    minWidth={"200px"}
                    minHeight={"30px"}
                    margin={"5px"}
                    onClick={onRegister}
                ></FormButton>}
            </div>
            <p>{pageMassage}</p>
        </LoginContainer>
    )
}

export default LoginForm