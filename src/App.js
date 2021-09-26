import React from "react";
import { List } from "./List";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { description: "クリック前" };
    }
    changeDescription() {
        this.setState({
            description: "クリック後",
        });
    }
    render() {
        const { description } = this.state;
        return (
            <dib>
                {description}
                <List title="リストです" />
                <button onClick={() => this.changeDescription()}>ボタン</button>
            </dib>
        );
    }
}

export default App;
