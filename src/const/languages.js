export const LANGUAGES = ["JavaScript", "C++", "Ruby", "JaVa", "PHP", "Go"];

export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(LANGUAGES);
        }, 1000);
    });
};
