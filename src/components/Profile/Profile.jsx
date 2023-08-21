import PropTypes from 'prop-types';
import { Wrapper, Avatar, StatsList, StatsItem } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Wrapper>
        <Avatar src={avatar} alt={username} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </Wrapper>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </StatsItem>
      </StatsList>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
