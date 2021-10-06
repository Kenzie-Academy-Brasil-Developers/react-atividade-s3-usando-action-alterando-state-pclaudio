import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const user = useSelector((state) => state.user);

  const [newName, setNewName] = useState("");

  const dispach = useDispatch();

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleClick = () => {
    dispach(changeName(newName));
    setNewName("");
  };

  return (
    <div>
      <div>User name: {user.name}</div>
      <div>
        <input value={newName} onChange={(event) => handleChangeName(event)} />
        <button onClick={handleClick}>Change</button>
      </div>
    </div>
  );
};

export default UserCard;
