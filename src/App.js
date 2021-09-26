import React from "react";
import { Form } from "./Form";
import { List } from "./List";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tab: "list" };
    }
    changeDescription() {
        this.setState({
            description: "クリック後",
        });
    }
    render() {
        const { tab } = this.state;
        return (
            <dib>
                <header>
                    <ul>
                        <li onClick={() => this.setState({ tab: "list" })}>リスト</li>
                        <li onClick={() => this.setState({ tab: "tab" })}>フォーム</li>
                    </ul>
                </header>
                <hr />
                {tab === "list" ? <List title="リストです" /> : <Form />}
            </dib>
        );
    }
}

export default App;
