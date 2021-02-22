import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPosts());
  }, [dispatch, data]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div> error!</div>;
  if (!data) return null;
  return <PostList posts={data}></PostList>;
}

export default PostListContainer;
