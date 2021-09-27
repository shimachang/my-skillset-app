import { useState } from "react";
import { Button } from "./components/botton";
import styled from "styled-components";
import { TabBodyContainer } from "./components/tab-body-container";
import { FormModal } from "./FormModal";
import { Hint } from "./Hint";

const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px;
    font-weight: bold;
`;
const Input = styled.input`
    border-radius: 3px;
    padding: 4px 8px;
    border: 1px solid black;
`;

const ButtonContainer = styled.div`
    margin-top: 24px;
`;

const FormButton = styled(Button)`
    width: 120px;
`;

export const Form = ({ onAddLang }) => {
    const [text, setText] = useState("");
    const [showModal, setShowModal] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    return (
        <TabBodyContainer title="新しい言語の追加">
            <Label>言語</Label>
            <form onSubmit={submitForm}>
                <div>
                    <Input type={"text"} value={text} onChange={(e) => setText(e.target.value)}></Input>
                    <Hint />
                </div>
                <ButtonContainer>
                    <FormButton>追加</FormButton>
                </ButtonContainer>
            </form>
            {showModal && <FormModal confirm={() => onAddLang(text)} cancel={() => setShowModal(false)} />}
        </TabBodyContainer>
    );
};
