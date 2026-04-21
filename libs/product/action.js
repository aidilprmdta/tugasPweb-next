import pool from "@/libs/db";

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

export async function createProduct(productData) {
    try{
        const { nama, price, stock } = productData;
        const [result] = await pool.query(
            "INSERT INTO products (name, price, stock) VALUES (?, ?, ?)",
            [name, price, stock],
        );
        return result.insertId;
    } catch (error) {
        console.error("Error creating product:", error);
        throw new Error("Failed to create product");
    }
}

export async function updateProduct(id, productData) {
    try{
        const { name, price, stock } = productData;
        const [result] = await pool.query(
            "UPDATE products SET name = ?, stock = ? WHERE id =",
            [name, price, stock, id],
        );
        return result.affectedRows > 0;
    } catch (error) {
        console.error("Error updating product:", error);
        throw new Error("Failed to update product");
    }
}   