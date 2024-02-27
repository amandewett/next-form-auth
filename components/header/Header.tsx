import Nav from "./Nav";
import { ElementType } from "@/enums/enums";
import AnimatedNavigationBar from "./animated/AnimatedNavigationBar";

const Header = () => {
  return (
    <header className="w-screen h-20 sticky top-0 right-0 left-0 flex justify-between items-center bg-aTextColor text-aBgColor z-10 px-8">
      <Nav
        href="/"
        styles={{
          elementType: ElementType.H1,
          active: "font-extrabold text-2xl",
        }}
      >
        NextJS + Form + Auth
      </Nav>
      <AnimatedNavigationBar />
    </header>
  );
};

export default Header;
