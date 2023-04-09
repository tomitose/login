import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";
import { Marginer } from "../Marginer";
import { AccountContext } from "./accountContext";


const LoginForm = (props) => {

  const {switchToSignup} = useContext(AccountContext)

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password ?</MutedLink>
      <Marginer direction="vertical" margin="1.8em" />
      <SubmitButton type="submit">Sign in</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don`t have an account ? <BoldLink onClick={switchToSignup} href="#">Signup</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default LoginForm;
