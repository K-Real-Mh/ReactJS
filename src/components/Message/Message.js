export default function Message({author, text}) {
    return <p className="Message">{author && `${author}:`} {text}</p>
}
