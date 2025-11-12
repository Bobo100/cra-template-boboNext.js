import NavBarDesktop from "./components/desktop/NavBarDesktop";
import NavBarMobile from "./components/mobile/NavBarMobile";

export default function NavBar({}: {}) {
  return (
    <>
      <NavBarDesktop />
      <NavBarMobile />
    </>
  );
}
