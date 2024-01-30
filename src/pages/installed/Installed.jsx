import { faGithub, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Installed() {
  return (
    <main className="flex items-center flex-col justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Thanks for install ♡</h1>
      <div className="mt-5 space-x-5">
        <a
          href="https://github.com/cresvin/shortway"
          className="hover:underline underline-offset-4"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          Github
        </a>
        <a
          href="https://www.paypal.com/paypalme/cresvinn"
          className="hover:underline underline-offset-4"
        >
          <FontAwesomeIcon icon={faPaypal} className="mr-2" />
          Support me
        </a>
      </div>
    </main>
  );
}
