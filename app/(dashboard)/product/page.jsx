import { getAllProducts } from "@/libs/product/action";

export default async function Home() {
    const products = await getAllProducts();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                    Daftar Barang
                </h2>
                <a href="/tambah" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    + Tambah Barang
                </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-linear-to-r from-blue-600 to-blue-700 text-white">
                            <th className="p-4 text-left font-semibold">ID</th>
                            <th className="p-4 text-left font-semibold">Nama Barang</th>
                            <th className="p-4 text-left font-semibold">Harga</th>
                            <th className="p-4 text-center font-semibold">Stok</th>
                            <th className="p-4 text-center font-semibold">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            {products.map((product, index) => ( 
                                <tr key={product.id} className={`border-b transition-colors duration-200 ${ index % 2 === 0 ? "bg-gray-100" : "bg-white" } hover:bg-blue-100`} > <td className="p-4 text-gray-700 font-medium">{product.id}</td> <td className="p-4 text-gray-800 font-medium"> {product.name} </td> <td className="p-4 text-green-600 font-semibold text-right"> Rp{" "} {Number(product.price).toLocaleString("id-ID", { minimumFractionDigits: 0, maximumFractionDigits: 0, })} </td> <td className="p-4 text-center"> <span className={`px-3 py-1 rounded-full text-sm font-semibold ${ product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700" }`} > {product.
                    </tbody>
                </table>
            </div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}
