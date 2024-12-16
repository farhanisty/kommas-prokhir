import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiLockers } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { GiSewingString } from "react-icons/gi";

export default function FootBar() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 border-t h-[60px] flex items-center px-10">
      <ul className="flex justify-between w-full">
        <li>
          <Link to="/">
            <FaHome className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link to="/order">
            <FaBook className="text-2xl opacity-50" />
          </Link>
        </li>
        <li>
          <Link to="/locker">
            <GiLockers className="text-2xl opacity-50" />
          </Link>
        </li>
        <li>
          <Link to="/inventory">
            <GiSewingString className="text-2xl opacity-50" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
