import React from 'react';
import './App.css';
import PostList from './components/PostList';
import Profile from './components/Profile';
import CommentSection from './components/CommentSection';

const App = () => {
  const user = {
    name: 'John Doe',
    bio: 'Web Developer & Designer',
    profilePic: '/images/profile.jpg', // Local image
  };

  const posts = [
    {
      id: 1,
      title: 'First Post',
      body: 'This is the body of the first post.',
      image: '/images/post1.jpg', // Local image
      likes: 15,
    },
    {
      id: 2,
      title: 'Second Post',
      body: 'This is the body of the second post.',
      image: '/images/post2.jpg',
      likes: 10,
    },
  ];

  return (
    <div className="App">
      <Profile user={user} />
      <PostList posts={posts} />
      <CommentSection postId={1} />
    </div>
  );
};

export default App;