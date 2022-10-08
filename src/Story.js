import Button from "./Button"

export default function Story(props) {
    const {story} = props;
    return (<div className="story">
        <h4>{story.title}</h4>
        <p>{story.points} points by {story.author} | {story.num_comments} comments</p>
        <a href={story.url}><Button blue transparent>Read more</Button></a>
        <Button transparent value={story.objectID} red onButtonClick={props.onStoryRemove}>Remove</Button>
    </div>)
}