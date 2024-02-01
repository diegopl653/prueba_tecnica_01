"use client";

import { useRouter } from "next/navigation";


export default function TestPage() {
  const router = useRouter();
  const onClick = () => {
    router.push("/register");
  }
  
  return <div>Test Page
    <button onClick={onClick}>Go to register</button>
  </div>
}