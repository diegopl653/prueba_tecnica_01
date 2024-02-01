'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import Link from "next/link";
import * as Yup from  "yup";
import { useFormik } from 'formik';

const schema = Yup.object().shape({
  email:Yup.string()
    .email("Invalid Email")
    .required('Required'),
})

function login() {
  const [Credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const router = useRouter()

  const changeUser = (e) => {
    setCredentials({
      ...Credentials,
      [e.target.name]: e.target.value,
    }); 
  };

  const loginUser = async () => {
    try{
      await signInWithEmailAndPassword(auth,  Credentials.email, Credentials.password);
      alert('Finally!!')
      router.push('/')
    }catch (error){
console.log(error);
    }
  }

  const {handleChange, errors} = useFormik({
    initialValues:{
      email:'',
      password:'',
    },

    validationSchema: schema,

  })

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser();
    router.push('/')

  }

  return (
    <div class=" flex w-screen h-screen">
      <div className="hidden md:flex flex-col gap-10 w-1/3 bg-primary text-zinc-100 items-center justify-center">
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
      <div className="flex flex-col md:w-2/3 w-screen md:bg-zinc-100 items-center justify-center ">
        <div className="flex flex-col bg-white md:shadow-lg text-center md:rounded-2xl py-20 justify-center gap-1">
          <svg
            class="w-2/12 mx-auto"
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
          <p className="text-3xl font-bold text-primary">Welcome Back</p>
          <p className="text-gray-500">Sign to continue</p>
          <form
            className="flex flex-col gap-10 md:px-12 px-8 relative mt-16"
            onSubmit={handleSubmit}
          >
            <svg
              className="absolute w-6 h-fit top-3 md:left-14 left-10"
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
              htmlFor="email"
              className="absolute left-20 leading-3 text-xs px-3 bg-white text-center text-gray-400"
            >
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              className="border-2 rounded h-10 mt-1 pl-10 font-semibold bg-white"
              onChange={handleChange}
            />

            <svg
              className="absolute w-6 h-fit top-[92px] md:left-14 left-10"
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
              htmlFor="password"
              className="absolute left-20 top-20 leading-3 text-xs px-3 bg-white text-center text-gray-400"
            >
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              className="border-2 rounded h-10 pl-10 font-semibold bg-white"
              onChange={handleChange}
            />
            <a href="" className="text-primary text-end text-sm">
              Forgot Password?
            </a>
            <button
              type="submit"
              className=" bg-primary text-white tracking-widest p-4 rounded-lg"
            >
              LOGIN
            </button>
            <br />
            {errors.email && <span>Email invalido</span>}
          </form>
          <p className="text-xs mt-5 px-24">
            Don't have account?
            <Link href="/register" className="text-primary font-semibold">
              {" "}
              create a new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default login
