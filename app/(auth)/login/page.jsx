import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
                    Login Maju Jaya
                </h1>

                <form className="flex flex-col gap-4">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Username
                        </label>    
                        <input
                            type="text"
                            required
                            className="w-full border p-2 rounded focus:outline-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full border p-2 rounded focus:outline-blue-500"
                        />
                    </div>
                    <Link
                        href="/product"
                        className="bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 mt-4 block"
                    >
                        Masuk ke Dashboard
                    </Link>
                </form>
            </div>
        </main>
    );
}