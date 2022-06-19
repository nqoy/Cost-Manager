import { useState } from "react"
import Select from 'react-select'
import { FormButton } from "./Button";
import { SmallFlex } from "./Styles/Flex";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StyledInput } from "./Styles/Input.Styled";

const AddCostForm = ({ categoryOptions, currentDate, monthOptions, user_identifier }) => {

    const [selectDate, setSelectDate] = useState(currentDate);
    const [description, setDescription] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [category, setCategory] = useState("");
    const [sum, setSum] = useState("");

    const createSelectOptions = () => {
        let options = [];
        categoryOptions.forEach(category => {
            options.push({ value: category, label: category });
        });

        return options;
    }

    const categorySelectOptions = createSelectOptions();

    const onSubmit = async () => {
        const month = monthOptions[selectDate.getMonth() + 1];
        const year = selectDate.getFullYear();
        const errors = {};

        if (!category.trim()) {
            errors.category = "Please choose a category";
        }
        if (!description.trim()) {
            errors.description = "Description is needed";
        }
        if (!sum.toString().trim()) {
            errors.sum = "Sum has to be 0 and above";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            const cost = { category, description, sum, month, year, user_identifier };
            console.log(JSON.stringify(cost));
            fetch("http://localhost:5000/costs/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cost)
            }).then(() => {
                console.log("Product added succesfully");
            })
            window.location.reload();
        }
    }

    return (
        <SmallFlex>
            <div className="Form Control">
                <label style={{ marginRight: "10px" }}>Category</label>
                <Select
                    required
                    options={categorySelectOptions}
                    onChange={(e) => setCategory(e.value)}
                ></Select>
                <p style={{
                    fontSize: "10px",
                    color: "#d40a00",
                    fontWeight: "bold",
                    marginTop: "2px"}}
                >{formErrors.category}</p>
            </div>
            <StyledInput className="Form Control">
                <label>Description</label>
                <input
                    minLength={2}
                    type="text"
                    placeholder="Name"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></input>
                <p>{formErrors.description}</p>
            </StyledInput>
            <StyledInput className="Form Control">
                <label>Sum</label>
                <input
                    type="number"
                    minLength={1}
                    min="0"
                    placeholder="Sum"
                    required
                    value={sum}
                    onChange={(e) => setSum(e.target.value)}
                ></input>
                <p>{formErrors.sum}</p>
            </StyledInput>
            <StyledInput>
                <label>Date</label>
                <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={selectDate}
                    onChange={(date) => setSelectDate(date)}>
                </DatePicker>
            </StyledInput>
            <FormButton
                text={"Add"}
                onClick={onSubmit}
            ></FormButton>
        </SmallFlex>
    )
}

export default AddCostForm
