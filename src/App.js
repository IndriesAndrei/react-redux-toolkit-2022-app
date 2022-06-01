import './App.css';
import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <div className="container">
      {/* <Counter /> */}
      <h1 className='text-center my-3'>React Redux Toolkit Posts App</h1>
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
