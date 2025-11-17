import { Link } from "react-router-dom";
import SearchInputComponent from "./SearchInputComponent";

export default function Header() {
  return <div>
  <Link to="/">NPM React</Link>
  <SearchInputComponent />

  </div>;
}