import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

const NavbarRightSide = () => {
  const [user] = useLocalStorage("nickname");
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {user && (
        <button disabled style={{ cursor: "default" }}>
          {user}
        </button>
      )}
      {!user && <button onClick={onLogin}>Login</button>}
    </>
  );
};

export default NavbarRightSide;
