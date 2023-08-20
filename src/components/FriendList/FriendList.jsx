export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span class="status" isOnline={isOnline}></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </>
  );
};
