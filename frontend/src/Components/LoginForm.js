import Header from './Header';
import { FormButton } from './Button';
import { SmallFlex } from './Styles/Flex'
import { useState, useEffect } from 'react'
import { StyledInput } from './Styles/Input.Styled';
import { LoginContainer } from './Styles/Container.styled';

const LoginForm = ({ setUserIdentifier }) => {

    const [user_id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [last_name, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [first_name, setFirstName] = useState("");
    const [marital_status, setMaritalStatus] = useState("");
    const [user, setUser] = useState({});

    const [formErrors, setFormErrors] = useState({});
    const [isRegister, setIsRegister] = useState(false);
    const [pageMassage, setPageMassage] = useState("");

    useEffect(() => {
        const user_id = window.localStorage.getItem("USER_ID");
        if (user_id != "") {
            setUserIdentifier(JSON.parse(user_id))
        }
    }, [])


    const onRegister = () => {
        const errors = {};

        if (!username.trim() || username.trim().length < 3) {
            errors.username = "Min 3 characters required";
        }
        if (!first_name.trim() || first_name.trim().length < 2) {
            errors.first_name = "Min 2 characters required";
        }
        if (!user_id.trim() || user_id.trim().length < 9) {
            errors.user_id = "Min 9 characters required";
        }
        if (!last_name.trim() || last_name.trim().length < 2) {
            errors.last_name = "Min 2 characters required";
        }
        if (!birthday.trim()) {
            errors.birthday = "Please choose a date";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            const newUser = {username, user_id, first_name, last_name, birthday, marital_status};
            console.log(JSON.stringify(newUser))
            fetch("http://localhost:5000/users/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            }).then(() => {
                console.log("User added succesfully");
            })
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
        if (!user_id.trim() || user_id.trim().length < 9) {
            errors.user_id = "Min 9 characters required";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setPageMassage("Loading Profile...");
            const usere = {};
            getUser().then(result => setUser(result[0])); // FIX 2 CLICKS
            if (usere != null) {
                setPageMassage("Login Successfully");
                setUserIdentifier(user.user_identifier);
            }
            else { setPageMassage("Check login info"); }
        }
        else { setPageMassage(""); }
    }

    const getUser = async () => {
        const user = await fetchUserFromDB();
        return user;
    }

    const fetchUserFromDB = async () => {
        const url = "http://localhost:5000/users/username/" + username + "/userid/" + user_id;
        const response = await fetch(url);
        const data = response.json();
        return data;
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
                            value={first_name}
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
                            value={user_id}
                            onChange={(e) => setId(e.target.value)}
                        ></input>
                        <p>{formErrors.user_id}</p>
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
                            value={last_name}
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
                    margin={"10px"}
                    onClick={onRegister}
                ></FormButton>}
            </div>
            <p>{pageMassage}</p>
        </LoginContainer>
    )
}

export default LoginForm