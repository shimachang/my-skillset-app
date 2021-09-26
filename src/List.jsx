import { useEffect } from "react";

export const List = ({ langs }) => {
    useEffect(() => {
        console.log("list.js:seeffect");

        return () => {
            console.log('list.js: useeffect:unmounting')
        };
    });
    return (
        <div>
            {langs.map((lang, index) => {
                return <div key={index}>{lang}</div>;
            })}
        </div>
    );
};
