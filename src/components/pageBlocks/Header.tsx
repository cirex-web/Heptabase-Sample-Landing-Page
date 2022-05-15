
import "../../styles/header.css";
import logo from "../../assets/logo.png";
import DownloadButtons from "../DownloadButtons";


function Header() {
  

  return (
    <div className="large-container">
      <div className="container-content">
        <div>
          <img src={logo} alt="logo" id="logo" />
          <div className="container-header">
            <span>Note taking just got a lot more </span>
            <span id="container-word">visual</span>
          </div>
          <div className="subtitle">
            The all-in-one tool you need to transform ideas into valuable
            content.
          </div>
        </div>
        <DownloadButtons></DownloadButtons>
      </div>
    </div>
  );
}

export default Header;
