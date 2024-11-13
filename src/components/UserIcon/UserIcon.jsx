import "./UserIcon.css";
import { FaCircle } from "react-icons/fa6";

const UserIcon = ({ intials, available, bgColor }) => {
  console.log(bgColor);
  return (
    <div className="user">
      <div className="user_icon" style={{ backgroundColor: bgColor }}>
        {intials}
      </div>
      <div
        className="dot"
        style={available ? { color: "#ecb903" } : { color: "#bdbbba" }}
      >
        <FaCircle size="11px" className="icon" />
      </div>
    </div>
  );
};

export default UserIcon;
