import { Link, useLocation } from "react-router-dom";

export default function FootBarItem({ children, link }) {
  const location = useLocation();
  return (
    <li
      className={`p-3 text-2xl ${location.pathname == link ? "bg-primary rounded text-white" : ""}`}
    >
      <Link to={link}>{children}</Link>
    </li>
  );
}
