"use client";
import LoadingPage from "@/app/loading";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProfileContainer = () => {
  const { data, status } = useSession();
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch(`/api/user`, { method: "GET" });
        if (response.ok) {
          const data = await response.json();
          setUserEmail(data.result.email);
        }
      } catch (e: any) {
        console.log(e);
        throw new Error(e.message);
      }
    };
    getUserData();
  }, []);

  if (status === "loading") {
    return <LoadingPage />;
  }

  if (status === "authenticated") {
    return (
      <motion.div className="mt-20 text-4xl font-bold flex justify-center">
        <motion.span
          className="cursor-pointer"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 300 },
          }}
        >{`Welcome ${userEmail}`}</motion.span>
      </motion.div>
    );
  } else {
    // window.location.href = "/login";
    router.replace("/login");
  }
};

export default ProfileContainer;
