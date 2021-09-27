import { useState } from "react";
import { Button } from "./components/botton";
import styled from "styled-components";

const Container = styled.div`
    padding: 12px 64px
`

const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px;
    font-weight: bold;
`
;
const Input = styled.input`
border-radius: 3px;
padding: 4px 8px;
border: 1px solid black
`

const ButtonContainer = styled.div`
margin-top: 24px
`

const FormButton = styled(Button)`
    width: 120px
`

export const Form = ({onAddLang}) => {
    const [text, setText] = useState("");

    const submitForm = (event) => {
        event.preventDefault();
        onAddLang(text)
    };

    return (
        <Container>
            <h4>新しい言語の追加</h4>
            <Label>言語</Label>
            <form onSubmit={submitForm}>
                <div>
                    <Input type={"text"} value={text} onChange={(e) => setText(e.target.value)}></Input>
                </div>
                <ButtonContainer>
                    <FormButton>追加</FormButton>
                </ButtonContainer>
            </form>
        </Container>
    );
};
