import { forwardRef } from "react";
import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";

interface IInputProps {
  id: string;
  type: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ id, type, ...rest }, ref) => (
    <div>
      <StyledInputContainer>
        <input type={type} id={id} placeholder=" " {...rest} ref={ref} />
        <label htmlFor={id}>Teste</label>
      </StyledInputContainer>
      <StyledParagraph fontColor="red">Erro</StyledParagraph>
    </div>
  )
);

export default Input;
