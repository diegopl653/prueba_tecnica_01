'use client'
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/authSlice";
import { auth } from "@/firebase/firebase";
import { useEffect } from "react";

const profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
      router.push("/");
    } catch {
      console.error("Error al cerrar sesión:", error);
    }
  };
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, router]);
  
  return (
    <>
      <div className=" flex flex-col justify-center items-center profile w-screen h-screen bg-amber-400 ">
        <h1>Profile</h1>
        <p>This is the profile page.</p>
        <p className="flex flex-col justify-center">
          you won't be able anything else while you are logged in, please
          <button onClick={handleLogout} className="font-bold px-10 py-3 bg-orange-600 w-fit mx-auto rounded-xl hover:bg-red-500 shadow shadow-black active:bg-orange-400">
            LOGOUT
          </button>
        </p>
      </div>
    </>
  );
};

export default profile;
