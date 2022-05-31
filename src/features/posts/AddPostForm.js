import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

export default function AddPostForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )

            setTitle('');
            setContent('');
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <div className="form-group my-3">
                    <label htmlFor="postTitle">Post Title:</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="postTitle"
                        name="postTitle"    
                        value={title}
                        onChange={onTitleChanged}
                    />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="postAuthor">Author:</label>
                    <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                        <option value=""></option>
                        {usersOptions}
                    </select>
                </div>

                <div className="form-group my-3">
                    <label htmlFor="postContent">Content:</label>
                    <textarea
                        id="postContent"
                        className="form-control"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                    />
                </div>

                {/* we disable the button, if not all fields are completed */}
                <button 
                    className="btn btn-success mt-2"
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
                <hr />
            </form>
        </section>
    )
}