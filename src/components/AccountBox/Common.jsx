import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500px;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  color: rgb(12, 108, 44);
  margin: 0 4px
`;

export const Input = styled.input `
    height: 42px;
    width: 100%; 
    outline: none;
    border: 1px solid rgba(200,200,200, 0.0.3);
    padding: 0px 10px;
    border: 1.4px solid #0000000d;
    transition: all 150ms ease-in-out;
    font-size: 12px;

    &::placeholder {
        color: rgba(200,200,200,1);
    }

    &:not {
        border-bottom: 1.5px solid rgba (200,200,200,0.4);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(12, 108, 44);
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size:15px;
    font-wight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(12, 108, 44);
    background: linear-gradient(
      90deg,
      rgba(12, 108, 44, 1) 0%,
      rgba(53, 103, 1, 1) 0%,
      rgba(55, 111, 63, 1) 100%
    );

    &:hover {
        filter: brightness(1.03);
    }

`;


