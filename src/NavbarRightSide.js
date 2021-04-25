import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarRightSide = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {user && (
        <button disabled style={{ cursor: "default" }}>
          {user.nickname}
        </button>
      )}
      {!user && <button onClick={onLogin}>Login</button>}
    </>
  );
};

export default NavbarRightSide;
