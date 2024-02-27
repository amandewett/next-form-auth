import Nav from "./Nav";
import { ElementType } from "@/enums/enums";

const NavigationBar = () => {
  return (
    <nav>
      <ul className="flex items-center">
        <li>
          <Nav
            href="/"
            styles={{
              elementType: ElementType.H4,
              active:
                "ml-5 font-medium underline underline-offset-4 decoration-2",
              passive: "ml-5 font-medium",
            }}
          >
            Home
          </Nav>
        </li>
        <li>
          <Nav
            href="/login"
            styles={{
              elementType: ElementType.BUTTON,
              active:
                "ml-8 w-24 h-10 rounded-md bg-aBgColor text-aTextColor p-2 font-medium text-center border-b-[2px] border-r-[2px] border-l-[2px] underline underline-offset-2 decoration-2",
              passive:
                "ml-8 w-24 h-10 rounded-md bg-aBgColor text-aTextColor p-2 font-medium text-center",
            }}
          >
            Login
          </Nav>
        </li>
        <li>
          <Nav
            href="/signup"
            styles={{
              elementType: ElementType.BUTTON,
              active:
                "ml-8 w-24 h-10 rounded-md bg-aBgColor text-aTextColor p-2 font-medium text-center border-b-[2px] border-r-[2px] border-l-[2px] underline underline-offset-2 decoration-2",
              passive:
                "ml-8 w-24 h-10 rounded-md bg-aBgColor text-aTextColor p-2 font-medium text-center",
            }}
          >
            Signup
          </Nav>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
