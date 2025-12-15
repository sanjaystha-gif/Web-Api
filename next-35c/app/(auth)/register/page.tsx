import RegisterForm from "../_components/register-form";
import Link from "next/link";
export default function Page() {
    return (
        <div>
            Login Page
            <RegisterForm/>
            <Link
                className="bg-blue-500 text-white px-4 py-2 rounded" href="/register">
                Register
                </Link>
        </div>
    );
}