import React from 'react';
import LikeButton from './likebutton'; // Import the LikeButton component
import './postcard.css'; // Optional: Add styling

function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src={post.profileImage} alt={post.username} className="profile-image" />
      <div className="post-details">
        <h3 className="username">{post.username}</h3>
        <p className="content">{post.content}</p>
        <LikeButton isLiked={post.isLiked} />
      </div>
    </div>
  );
}

export default PostCard;