'use client'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Link from "next/link";
import { UseDispatch } from "react-redux";
import { setError } from "@/redux/dataSlice";

const schema = Yup.object().shape({
  name: Yup.string().min(3).required(),
  email: Yup.string().email().required(),
  phone: Yup.number().moreThan(10000000).integer().positive().required(),
  password: Yup.string().min(6).required(),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .min(6)
    .required(),
});

function register() {
  const [Credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const push = useRouter();

  const changeUser = (e) => {
    setCredentials({
      ...Credentials,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        Credentials.email,
        Credentials.password,
      );
      push.push("/");
      console.log(Credentials.email, Credentials.password);
    } catch (error) {
      console.error(error);
    }
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: async () => {
      await registerUser();
      push.push("/");
    },
    onInput: () =>{
      changeUser();
    },
    validationSchema: schema,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };
  return (
    <div class="flex w-screen h-screen">
      <div className="hidden md:flex flex-col gap-10 md:w-1/3 w-screen bg-primary text-zinc-100 items-center justify-center">
        <svg
          class="w-1/4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256.69 314.97"
          fill="#0DD2FD"
        >
          <defs></defs>
          <g id="Capa_2" data-name="Capa 2">
            <g id="Capa_1-2" data-name="Capa 1">
              <path
                class="cls-1"
                d="M112.91,22.25C102.49,14.37,91.68,7.7,80.08,3.1,34.93-14.84-23.95,48.92,10.19,97c37.15,52.28,85.69,86.12,111,113.94a6.85,6.85,0,0,1,1.78,5,252.65,252.65,0,0,0,.09,31.8c.09,8.1,10.74,10.82,12.77.65A6.38,6.38,0,0,0,136,247c0-18.9,20.13-16.47,18.27.4a4.18,4.18,0,0,1-.07.51c-7.84,43.62,22.62,42.6,15.57-.25-2.29-19.12-1.06-33,1.62-41.33a6.88,6.88,0,0,1,9.73-4,25.41,25.41,0,0,1,4.4,3,7.29,7.29,0,0,1,.58.53l44.19,45.25c.13.13.26.26.4.38,19.22,17.11,34.68-6.73,20.58-18.82L199,179.21l.09.09c11-13.84,23.94-24.91,27.57-33.06a6.88,6.88,0,0,0-.11-5.75c-3.32-6.88-8.51-13.68-15.9-20.22-7.09-6.25-14-13.32-21-20.83a7,7,0,0,0-9.19-1c-12.13,9-25.51,0-28.25-8.23a6.7,6.7,0,0,0-6.87-4.5c-5,.4-8.15-1.08-9.24-3.7a6.59,6.59,0,0,0-5.59-3.92c-8.36-.71-11.41-9.7-10.64-20.4a7,7,0,0,0-5.47-7.44c-10-2-16.93-14.43-1.49-28l.53-.41"
              />
              <path
                class="cls-1"
                d="M168.52,308.15c0,4.87-2.12,6.82-7.53,6.82s-6.65-2.54-6.65-7.41a22.9,22.9,0,0,1,.19-2.91c.93-7.4,11.61-8,13.41-.74A17.9,17.9,0,0,1,168.52,308.15Z"
              />
            </g>
          </g>
        </svg>
      </div>

      <div className="flex flex-col md:w-2/3 w-full md:bg-zinc-100 items-center justify-center ">
        <div className="flex flex-col bg-white md:shadow-lg text-center rounded-2xl py-20 justify-center gap-1">
          <Link href={"/login"}>
            <svg
              className="w-fit h-10 md:-mt-14 -mt-20 mb-10 pl-5"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M6 12L11 7M6 12L11 17"
                stroke="#013CBE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <p className="text-3xl font-bold text-primary">Create Account</p>
          <p className="text-gray-500 text-sm">Create a new account</p>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-10 md:px-12 px-8 relative mt-16"
          >
            <label
              for="name"
              htmlFor="name"
              className="absolute left-24 leading-3 text-xs px-3 bg-white text-center text-gray-400"
            >
              <svg
                className="absolute -ml-4 w-6 h-fit top-3 md:-left-5 -left-9"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_15_82)">
                  <rect width="24" height="24" fill="white" />
                  <g filter="url(#filter0_d_15_82)">
                    <path
                      d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                      fill="#0DD2FD"
                    />
                  </g>
                </g>
              </svg>
              NAME
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="border-2 rounded h-10 mt-1 pl-10 font-semibold"
              onInput={handleChange}
            />
            {errors.name && (
              <span className="flex -mt-10 justify-end text-red-700 font-bold">
                {errors.name}
              </span>
            )}
            <svg
              className="flex mb-[-80px] ml-3 z-20 w-6 h-fit top-3 md:-left-5 -left-9"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z"
                stroke="transparent"
                fill="#0DD2FD"
              />
            </svg>
            <label
              for="email"
              htmlFor="email"
              className="flex -mb-12 ml-12 z-20 w-fit leading-3 text-xs px-3 bg-white text-center text-gray-400"
            >
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="border-2 rounded h-10 mt-1 pl-10 font-semibold"
              onInput={handleChange}
              onChange={changeUser}
            />
            {errors.email && (
              <span className="flex -mt-10 justify-end text-red-700 font-bold">
                {errors.email}
              </span>
            )}
            <svg
              className="flex mb-[-80px] ml-3 z-20 w-6 h-fit top-3 md:-left-5 -left-9"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10"
                stroke="#0DD2FD"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M15 19H9"
                stroke="#0DD2FD"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <label
              for="phone"
              htmlFor="phone"
              className="flex -mb-12 ml-12 z-20 w-fit leading-3 text-xs px-3 bg-white text-center text-gray-400"
            >
              PHONE
            </label>
            <input
              id="phone"
              type="number"
              name="phone"
              className="border-2 rounded h-10 mt-1 pl-10 font-semibold"
              onInput={handleChange}
            />
            {errors.phone && (
              <span className="flex -mt-10 justify-end text-red-700 font-bold">
                {errors.phone}
              </span>
            )}
            <svg
              className="flex mb-[-75px] ml-3 z-20 w-6 h-fit top-3 md:-left-5 -left-9"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                stroke="#0DD2FD"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <label
              for="password"
              htmlFor="password"
              className="flex -mb-12 ml-12 z-20 w-fit leading-3 text-xs px-3 bg-white text-center text-gray-400"
            >
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="border-2 rounded h-10 pl-10 font-semibold"
              onInput={handleChange}
              onChange={changeUser}
            />
            {errors.password && (
              <span className="flex -mt-10 justify-end text-red-700 font-bold">
                {errors.password}
              </span>
            )}
            <svg
              className="flex mb-[-80px] ml-3 z-20 w-6 h-fit top-3 md:-left-5 -left-9"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                stroke="#0DD2FD"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <label
              for="confirmpassword"
              htmlFor="confirmpassword"
              className="flex -mb-12 ml-12 z-20 w-fit leading-3 text-xs px-3 bg-white text-center text-gray-400"
            >
              CONFIRM PASSWORD
            </label>
            <input
              id="confirmpassword"
              type="password"
              name="confirmpassword"
              className="border-2 rounded h-10 mt-1 pl-10 font-semibold"
              onInput={handleChange}
            />
            {errors.confirmpassword && (
              <span className="flex -mt-10 justify-end text-red-700 font-bold">
                {errors.confirmpassword}
              </span>
            )}
            <button
              type="submit"
              className=" bg-primary text-white tracking-widest p-4 rounded-lg hover:bg-blue-950 focus:ring-2 focus:ring-sky-600 active:bg-sky-800"
            >
              CREATE ACCOUNT
            </button>
          </form>
          <p className="text-xs mt-5 px-24">
            Already have a account?
            <Link href="/login" className="text-primary font-semibold">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default register;