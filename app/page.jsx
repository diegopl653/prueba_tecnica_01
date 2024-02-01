import Link from "next/link"
export default function HomePage() {
    return <div className="flex flex-col gap-8 items-center justify-center h-screen">
        <h1>Welcome to the home page!</h1>
            <div className="flex gap-10">
        <Link href="/login">

        <button className="w-40 h-10 bg-red-700 rounded hover:bg-orange-700 text-white font-bold">Login</button>
        </Link>
        <Link href="/register">
        <button className="w-40 h-10 bg-red-700 rounded hover:bg-orange-700 text-white font-bold">Register</button>
        </Link>
            </div>
    </div>  
}