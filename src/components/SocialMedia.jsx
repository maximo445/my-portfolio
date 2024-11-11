import "../../src/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMedia({ orientation }) {
  return (
    <ul
      className={`${
        orientation === "vertical"
          ? "flex flex-col gap-6 h-7"
          : "flex gap-6 h-7"
      }`}
    >
      <li className="">
        <a
          href="https://github.com/maximo445"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        </a>
      </li>
      <li className="">
        <a
          href="https://www.linkedin.com/in/maximobrito/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
