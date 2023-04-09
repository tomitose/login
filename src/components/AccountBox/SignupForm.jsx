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

const SignUpForm = (props) => {
  const {switchToSignin} = useContext(AccountContext)


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account ? <BoldLink onClick={switchToSignin} href="#">Signin</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default SignUpForm;
