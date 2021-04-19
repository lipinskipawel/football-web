import { useState } from "react";

const NavbarRightSide = () => {
  const [user, setUser] = useState();

  const onLogin = () => {
    setUser({ nickname: "anonymous" });
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
