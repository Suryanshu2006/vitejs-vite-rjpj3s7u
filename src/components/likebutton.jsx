import React, { useState } from 'react';
import './likebutton.css'; // Optional: Include custom styles

function LikeButton({ isLiked: initialIsLiked }) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button 
      className={`like-button ${isLiked ? 'liked' : ''}`} 
      onClick={toggleLike}
    >
      {isLiked ? '❤️ Liked' : '♡ Like'}
    </button>
  );
}

export default LikeButton;