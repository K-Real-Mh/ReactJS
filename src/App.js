import './App.css';
import { useEffect, useState } from 'react';

function Message({author, text}) {
    return <p className="Message">{author && `${author}:`} {text}</p>
}

function Form({onSubmit}) {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const onButtonClick = () => {
       if (author && text) {
           const message = {
               author: author,
               text: text
           }
           onSubmit(message);
       }
    }

    return (
        <form>
            <label>
                Введите имя
                <input type="text" placeholder={'Имя'} onChange={e => setAuthor(e.target.value)}/>
            </label>
            <label>
                Введите сообщение
                <textarea cols="30" rows="10" placeholder={'Сообщение'}
                          onChange={e => setText(e.target.value)}></textarea>
            </label>
            <button type={'button'} onClick={onButtonClick}>Submit</button>
        </form>
    );
}

function App() {
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        if(messageList.length > 0 && messageList[messageList.length - 1].author !== 'robot') {
            const author = messageList[messageList.length - 1].author;
            const message = {
                author: 'robot',
                text: `Hello ${author}!`
            }

            setTimeout(() => {
                setMessageList(prevMessages => {
                    return [...prevMessages, message];
                })
            }, 1500)
        }
    }, [messageList])

    const handleAddMessage = (message) => {
        setMessageList(prevMessages => {
            return [...prevMessages, message];
        })
    }

    return (
        <div className="App">
            {
                messageList.length === 0 ?
                    <Message text={'Write your first message'}/> :
                    messageList.map((message, id) => {
                        return <Message key={id} author={message.author} text={message.text}/>
                    })
            }
            <Form onSubmit={handleAddMessage}/>
        </div>
    );
}

export default App;
