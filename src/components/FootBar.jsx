import { FaHome } from "react-icons/fa";
import { GiLockers } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { GiSewingString } from "react-icons/gi";
import FootBarItem from "./FootBarItem.jsx";

export default function FootBar() {
  return (
    <footer className="bg-background fixed bottom-0 left-0 right-0 border-t h-[60px] flex items-center px-10">
      <ul className="flex justify-between w-full">
        <FootBarItem link="/">
          <FaHome />
        </FootBarItem>
        <FootBarItem link="/order">
          <FaBook />
        </FootBarItem>
        <FootBarItem link="/locker">
          <GiLockers />
        </FootBarItem>
        <FootBarItem link="/inventory">
          <GiSewingString />
        </FootBarItem>
      </ul>
    </footer>
  );
}
