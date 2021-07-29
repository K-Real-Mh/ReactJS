import { useRef, useState } from 'react';
import { Button, TextField } from '@material-ui/core';

export default function Form({onSubmit}) {
    const [text, setText] = useState('');
    const inputRef = useRef(null);

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (text) {
            const message = {
                sender: 'you',
                message: text,
            }
            onSubmit(message);
            setText('');
            inputRef.current?.focus();
        }
    }

    return (
        <form noValidate autoComplete="off" onSubmit={onFormSubmit}>
            <TextField
                id="standard-textarea"
                label="Введите сообщение"
                multiline
                onChange={e => setText(e.target.value)}
                value={text}
                inputRef={inputRef}
            />
            <Button variant="contained" color="primary" type="submit">
                Send
            </Button>
        </form>
    );
}
