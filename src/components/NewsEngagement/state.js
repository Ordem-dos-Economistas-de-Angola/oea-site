import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useNewsEngagementState(item) {
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

  return { liked, disliked, likes, dislikes, toggleLike, toggleDislike, goToComments };
}
