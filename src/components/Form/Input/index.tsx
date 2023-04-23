import { forwardRef } from "react";
import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";
import { FieldError } from "react-hook-form";

interface IInputProps {
  id: string;
  type: string;
  error?: FieldError;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ id, type, error, ...rest }, ref) => (
    <div>
      <StyledInputContainer>
        <input type={type} id={id} placeholder="" {...rest} ref={ref} />
        <label htmlFor={id}>{type}</label>
      </StyledInputContainer>
      {error ? (
        <StyledParagraph fontColor="red">{error.message}</StyledParagraph>
      ) : null}
    </div>
  )
);

export default Input;
