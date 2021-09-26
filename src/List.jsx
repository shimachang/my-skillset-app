import React from "react";
const LANGUAGES = ["JavaScript", "C++", "Ruby", "JaVa", "PHP", "Go"];
export class List extends React.Component {
    render() {
        return (
            <div>
                {LANGUAGES.map((lang, index) => {
                    return <div key={index}>{lang}</div>;
                })}
            </div>
        );
    }
}
