import { memo, useRef, useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function Form(
    {
        onSubmit,
        label = 'Enter your message',
        btnLabel = 'Send'
    }
) {
    const [text, setText] = useState('');
    const inputRef = useRef(null);

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (text) {
            onSubmit(text);
            setText('');
            inputRef.current?.focus();
        }
    }

    return (
        <form noValidate autoComplete="off" onSubmit={onFormSubmit}>
            <TextField
                id="standard-textarea"
                label={label}
                multiline
                onChange={e => setText(e.target.value)}
                value={text}
                inputRef={inputRef}
            />
            <Button variant="contained" color="primary" type="submit">
                {btnLabel}
            </Button>
        </form>
    );
}

export const FormPure = memo(Form);
