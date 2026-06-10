import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './Icon';

export default function NewsEngagement({ item }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likes, setLikes] = useState(item.likes);
  const [dislikes, setDislikes] = useState(item.dislikes);

  const toggleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (liked) { setLikes(likes - 1); setLiked(false); }
    else { setLikes(likes + 1); setLiked(true); if (disliked) { setDislikes(dislikes - 1); setDisliked(false); } }
  };

  const toggleDislike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (disliked) { setDislikes(dislikes - 1); setDisliked(false); }
    else { setDislikes(dislikes + 1); setDisliked(true); if (liked) { setLikes(likes - 1); setLiked(false); } }
  };

  const goToComments = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/noticia/${item.id}`, { state: { openComments: true } });
  };

  return (
    <div className="news-engagement">
      <span className="news-views"><Icon name="eye" size={14} /> {item.views}</span>
      <button className="news-eng-btn" onClick={goToComments}>
        <Icon name="message" size={14} /> {item.comments || 0}
      </button>
      <button className={`news-eng-btn ${liked ? 'active' : ''}`} onClick={toggleLike}>
        <Icon name="thumbs-up" size={14} /> {likes}
      </button>
      <button className={`news-eng-btn ${disliked ? 'active' : ''}`} onClick={toggleDislike}>
        <Icon name="thumbs-down" size={14} /> {dislikes}
      </button>
    </div>
  );
}
