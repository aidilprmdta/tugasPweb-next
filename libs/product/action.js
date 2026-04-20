import pool from "@/lib/db";

export async function getAllProducts() {
    try{
        const [products] = await pool.query(
            "SELECT * FROM products ORDER BY id ASC",
        );
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
}