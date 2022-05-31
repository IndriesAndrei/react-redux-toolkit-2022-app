import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from './ReactionButtons';

export default function PostsList() {
    // we can read data from the store with useSelector
    const posts = useSelector(selectAllPosts);

    // order the posts by sorting the posts and with slice() we are returning a new array
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id} className="card mb-2">
            <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p>
                    <b><PostAuthor userId={post.userId} /></b> /
                    <TimeAgo timestamp={post.date} />
                </p>
                <p className="card-text">{post.content.substring(0, 100)}</p>
                <ReactionButtons post={post} />
            </div>
        </article>
    ))

    return (
        <div>
           <h2>Posts</h2>
           {renderedPosts}
        </div>
    )
}