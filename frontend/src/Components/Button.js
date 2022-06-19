import { StyledButton, StyledFormButton, StyledFilterButton } from "./Styles/Button.styled"

export const Button = ({ text, className, onClick, backgroundColor }) => {
    return (

        <StyledButton
            className={className}
            onClick={onClick}
            style={{ backgroundColor: backgroundColor }}
        >{text}</StyledButton>
    )
}

export const FormButton = ({ text, className, onClick, backgroundColor,
    minWidth, minHeight, margin, marginTop }) => {
    return (
        <StyledFormButton
            className={className}
            onClick={onClick}
            style={{
                backgroundColor: backgroundColor,
                minWidth: minWidth,
                minHeight: minHeight,
                margin: margin,
                marginTop: marginTop
            }}
        >{text}</StyledFormButton>
    )
}

export const FilterButton = ({ text, className, onClick }) => {
    return (
        <StyledFilterButton
            className={className}
            onClick={onClick}
        >{text}</StyledFilterButton>
    )
}

