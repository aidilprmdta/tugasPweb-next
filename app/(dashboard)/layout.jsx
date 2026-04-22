import Link from "next/link";

export  default function DashboardLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Maju Jaya IT</h1>
                    <nav className="space-x-4">
                        <Link href="/" className="hover:text-blue-200 font-medium">
                            Beranda
                        </Link>
                        <Link href="/product" className="hover:text-blue-200 font-medium">
                            Produk
                        </Link>
                        <Link
                            href="/logout"
                            className="hover:text-red-200 font-medium font-medium"
                        >
                            Logout
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="grow p-8 max-w-5xl mx-auto w-full">{children}</main>

            <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
                <p>©️ {new Date().getFullYear()} UMKM Maju Jaya. All rights reserved.</p>
            </footer>
        </div>
    )
}