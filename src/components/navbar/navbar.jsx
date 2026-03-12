import NavbarLeft from "./navbarItem/navbarLeft";
import NavbarRight from "./navbarItem/navbarRight";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
