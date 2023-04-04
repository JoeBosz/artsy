// import { Link } from "react-router-dom";

// export default function Navigation() {
// return (
// <nav className="bg-gray-700">
// {/* <ul className="flex justify-center gap-x-8 p-4 text-lg"> */}
// {/* <li> */}
// {/* <Link to="/">🏠 Home</Link> */}
// {/* </li> */}
// {/* <li> */}
// {/* <Link to="/about">📖 About</Link> */}
// {/* </li> */}
// {/* </ul> */}
// {/* </nav> */}
// );
// }

export default function Navigation({ setPage }) {
  return (
    <nav>
      <ul className="flex justify-center gap-x-8 p-4 text-lg">
        <li>
          <a href="#home" onClick={() => setPage("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="loginForm" onClick={() => setPage("loginForm")}>
            Login
          </a>
        </li>
        <li>
          <a href="loginRegister" onClick={() => setPage("loginRegister")}>
            Register
          </a>
        </li>

        <img src="./img/Artphoto.jpg" alt="Art" width="100" height="100" />
      </ul>
    </nav>
  );
}
