import { Route } from 'react-router-dom';
import CounterContainers from './containers/CounterContainers';
import PostListContainer from './containers/PostListContainer';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
function App() {
  return (
    <div>
      <CounterContainers />
      <PostListContainer />
      <Route path="/" component={PostListPage} exact></Route>
      <Route path="/:id" component={PostPage} />
    </div>
  );
}

export default App;
