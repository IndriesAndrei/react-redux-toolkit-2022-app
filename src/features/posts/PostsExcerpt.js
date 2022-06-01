import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from './ReactionButtons';

const PostsExcerpt = ({ post }) => {
  return (
    <article className="card mb-2">
        <div className="card-body">
            <h3 className="card-title">{post.title}</h3>
            <p>
                <b><PostAuthor userId={post.userId} /></b> /
                <TimeAgo timestamp={post.date} />
            </p>
            <p className="card-text">{post.body.substring(0, 100)}</p>
            <ReactionButtons post={post} />
        </div>
    </article>
  )
}

export default PostsExcerpt