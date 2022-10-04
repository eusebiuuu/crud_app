import User from "./User"

export default function Users(props) {
    const {users} = props;
    return (<>
        {users.map(user => {
            return <User key={user.id} details={user} />;
        })}
    </>)
}