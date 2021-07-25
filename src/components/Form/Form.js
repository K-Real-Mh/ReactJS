import { useRef, useState } from 'react';
import { Button, TextField } from '@material-ui/core';

export default function Form({onSubmit}) {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const inputRef = useRef(null);


    const onButtonClick = () => {
        if (author && text) {
            const message = {
                author: author,
                text: text
            }
            onSubmit(message);
            inputRef.current?.focus();
        }
    }

    return (
        <form noValidate autoComplete="off">
            <TextField
                required
                id="standard-required"
                label="Введите имя"
                onChange={e => setAuthor(e.target.value)}
                autoFocus={true}
                inputRef={inputRef}
            />
            <TextField
                id="standard-textarea"
                label="Введите сообщение"
                multiline
                onChange={e => setText(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={onButtonClick}>
                Send
            </Button>
        </form>
    );
}
