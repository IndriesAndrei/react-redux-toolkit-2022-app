import { createSlice } from "@reduxjs/toolkit";
// generate a random id, so we don't need uuid package
import { nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
    { id: '1', 
        title: 'Learning Redux Toolkit', 
        content: 'Learning the Redux Toolkit flow',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    },
    { id: '2', 
        title: 'Slices...', 
        content: 'The Redux Toolkit slices',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    },
]

const postsSlice = createSlice({
    // ====== Posts App ======
    name: 'posts',
    initialState,
    // actions called reducers
    reducers: {
        postAdded: {
            reducer(state, action) {
                // state.push works only in Slices
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title, 
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);

            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

// select all the posts and export them
export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;