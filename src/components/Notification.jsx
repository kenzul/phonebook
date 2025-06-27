
const Notification = ({ message, type }) => {
    return <p className={`notification ${type}`}>{message}</p>
}

export default Notification;