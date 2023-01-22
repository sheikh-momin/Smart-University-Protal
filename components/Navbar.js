import Link from "next/link";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link href="/" className="text-xl font-semibold">
          Home
        </Link>
      </li>
      <li>
        <Link href="/faculty" className="text-xl font-semibold">
          Faculty
        </Link>
      </li>
      <li>
        <Link href="/admission" className="text-xl font-semibold">
          Admission
        </Link>
      </li>
      <li>
        <Link href="/about" className="text-xl font-semibold">
          About
        </Link>
      </li>
      <li>
        <Link href="/blog" className="text-xl font-semibold">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/academic" className="text-xl font-semibold">
          Academic
        </Link>
      </li>
      <li>
        <Link href="/campuslife" className="text-xl font-semibold">
          Campus life
        </Link>
      </li>
      <li>
        <Link href="/Institutes" className="text-xl font-semibold">
          Institution Center
        </Link>
      </li>
      <li>
        <Link href="/jobplacement" className="text-xl font-semibold">
Job Placement        </Link>
      </li>
      <li>
        <Link href="/signin" className="text-xl font-semibold">
          Sign In
        </Link>
      </li>
    
    </>
  );
  return (
    <div>
      <div className="navbar bg-teal-800 text-white py-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {menuItems}
            </ul>
          </div>
          <div className="mx-auto flex">
            <div>
              <img
                src="https://lirp.cdn-website.com/1f50fc79/dms3rep/multi/opt/US+Dream+Academy+favicon+logo-1920w.png"
                alt=""
                className="lg:w-16 lg:h-12 sm:h-20"
              />
            </div>
            <div>
              <Link
                href="/home"
                className="btn btn-ghost normal-case text-md md:text-2xl font-serif italic"
              >
                Dreamers University
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
