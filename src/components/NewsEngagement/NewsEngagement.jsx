import Icon from '../Icon/Icon';
import { useNewsEngagementState } from './state';

export default function NewsEngagement({ item }) {
  const { liked, disliked, likes, dislikes, toggleLike, toggleDislike, goToComments } = useNewsEngagementState(item);

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
