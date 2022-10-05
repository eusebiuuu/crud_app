
export default function Story(props) {
    const {story} = props;
    return (<div className="story">
        <h4>Title</h4>
        <p>Points | Comments</p>
        <a href="#"><button>Read More</button></a>
        <button>Remove</button>
    </div>)
}