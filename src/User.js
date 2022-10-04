
export default function User(props) {
    const {login, avatar_url, html_url} = props.details;
    return <div className="card">
        <img src={avatar_url} />
        <p>{login}</p>
        <a href={html_url}><button className="btn">View Profile</button></a>
    </div>
}