import { useState } from "react";

export const WordCounter = () => {
    const [text, setText] = useState('');

    const countWords = (text) => {
        return `Words: ${text.split(" ").length}`
    };

    const onTextareaChange = (event) => {
        setText(countWords(event.target.value));
    };

    return (
        <>
            <textarea data-testid="word-counter" cols={60} rows={20} onChange={onTextareaChange} />
            <p data-testid="word-count">{text}</p>
        </>
    );
};
