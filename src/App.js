import './App.css';

function Message({text}) {
    return <p className="Message">{text}</p>
}

function App() {
    return (
        <div className="App">
            <Message text={'Hello world!'}/>
        </div>
    );
}

export default App;
