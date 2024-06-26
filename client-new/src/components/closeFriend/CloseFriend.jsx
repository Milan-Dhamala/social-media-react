import "./closeFriend.css";

export default function CloseFriend({user}) {
  //const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={`http://localhost:8800/images/${user.profilePicture}`} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
