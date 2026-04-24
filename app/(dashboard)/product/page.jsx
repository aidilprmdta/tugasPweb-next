import { getAllProducts, getProductCount, deleteProduct } from "@/libs/product/action";
import { redirect } from "next/navigation";
import DeleteModal from "./components/DeleteModal";
import { revalidatePath } from "next/cache";

export default async function Home({ searchParams }) {
    const sp = await searchParams;
    const search = sp?.search || "";
    const currentPage = Number(sp?.page) || 1;
    const limit = 3;

    const [products, totalItems] =  await Promise.all([
        getAllProducts(search, currentPage, limit),
        getProductCount(search),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                    Daftar Barang
                </h2>
                <a href="/product/tambah" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
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
                            <tr 
                                key={product.id} 
                                className={`border-b transition-colors duration-200 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-100`}
                            >
                                <td className="p-4 text-gray-700 font-medium">
                                    {product.id}
                                </td>
                                <td className="p-4 text-gray-800 font-medium">
                                    {product.name}
                                </td>
                                <td className="p-4 text-green-600 font-semibold text-right">
                                    Rp {Number(product.price).toLocaleString("id-ID")}
                                </td>
                                <td className="p-4 text-center">
                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                        {product.stock}
                                    </span>
                                </td>
                                <td className="p-4 text-center space-x-2">
                                    <a href={`/product/edit/${product.id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                        Edit
                                    </a>
                                    <DeleteModal
                                        productId={product.id}
                                        productName={product.name}
                                        deleteAction={deleteProductAction.bind(null, product.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-6 flex justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <a 
                        key={p}
                        href={`?search=${search}&page=${p}`}
                        className={`px-4 py-2 rounded border ${ 
                            p === currentPage ? "bg-blue-600 text-white" : "bg-white"
                        }`}
                        >
                            {p}
                        </a>
                    ))}
                </div>
            </div>  
            </div>
    );
}

async function deleteProductAction(productId) {
    "use server";

    try {
        const success = await deleteProduct(productId);
        if (!success) {
            throw new Error("Product tidak ditemukan");
        }
    } catch (error) {
        console.error("Error deleting product:", error);
        throw new Error("Gagal menghapus produk");
    }
    
    revalidatePath("/product"); 
}
