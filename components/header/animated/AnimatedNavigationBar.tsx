"use client";
import { useDispatch, useSelector } from "react-redux";
import AnimatedItem from "./AnimatedItem";
import { AppState } from "@/store/reduxStore";
import { authActions } from "@/store/slices/auth/auth.slice";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const AnimatedNavigationBar = () => {
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const { data, status } = useSession();
  const isAuthenticated = status === "authenticated" && data !== undefined;
  const router = useRouter();

  const handleLogout = () => {
    signOut().then(() => (window.location.href = "/login"));
  };

  return (
    <nav>
      <ul className="flex items-center">
        <AnimatedItem key={"/"} href="/">
          Home
        </AnimatedItem>
        {!isAuthenticated && (
          <AnimatedItem key={"/login"} href="/login">
            Login
          </AnimatedItem>
        )}
        {!isAuthenticated && (
          <AnimatedItem key={"/signup"} href="/signup">
            Signup
          </AnimatedItem>
        )}
        {isAuthenticated && (
          <AnimatedItem key={"/profile"} href="/profile">
            Profile
          </AnimatedItem>
        )}
        {isAuthenticated && (
          <AnimatedItem key={"/logout"} href="/logout" onClick={handleLogout}>
            Logout
          </AnimatedItem>
        )}
      </ul>
    </nav>
  );
};

export default AnimatedNavigationBar;
