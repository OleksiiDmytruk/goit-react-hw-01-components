import PropTypes from 'prop-types';
import { FreindItem, OnlineMark, List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FreindItem key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </FreindItem>
        );
      })}
    </List>
  );
};
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <OnlineMark bool={isOnline}></OnlineMark>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
