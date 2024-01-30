import logo from "@/assets/imgs/shortway-full.svg";
import { faGithub, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createNewTab } from "../helpers/createNewTab";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-5">
      <img src={logo} alt="Shortway - Logo" className="w-20" />
      <div>
        <button
          onClick={() =>
            createNewTab("https://www.paypal.com/paypalme/cresvinn")
          }
          className="w-8 h-8 hover:bg-zinc-800 rounded-full transition-colors"
        >
          <FontAwesomeIcon icon={faPaypal} />
        </button>
        <button
          onClick={() => createNewTab("https://github.com/cresvin/shortway")}
          className="w-8 h-8 hover:bg-zinc-800 rounded-full transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </header>
  );
}
