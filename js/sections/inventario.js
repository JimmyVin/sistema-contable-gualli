// dashboard.js
const inventario = `
    <div class="container mx-auto p-4">
        <h2 class="text-2xl font-semibold mb-4">Agregar Producto al Inventario</h2>
        <form id="inventoryForm" class="space-y-4">
            <div>
                <label for="productImage" class="block text-sm font-medium">Imagen del Producto</label>
                <input type="file" id="productImage" name="productImage" class="file-input file-input-bordered w-full" accept="image/*" required>
            </div>
            <div>
                <label for="productName" class="block text-sm font-medium">Nombre del Producto</label>
                <input type="text" id="productName" name="productName" class="input input-bordered w-full" placeholder="Nombre del producto" required>
            </div>
            <div>
                <label for="productPrice" class="block text-sm font-medium">Precio</label>
                <input type="number" id="productPrice" name="productPrice" class="input input-bordered w-full" placeholder="Precio del producto" required>
            </div>
            <div>
                <label for="productQuantity" class="block text-sm font-medium">Cantidad</label>
                <input type="number" id="productQuantity" name="productQuantity" class="input input-bordered w-full" placeholder="Cantidad disponible" required>
            </div>
            <div>
                <label for="productSupplier" class="block text-sm font-medium">Proveedor</label>
                <input type="text" id="productSupplier" name="productSupplier" class="input input-bordered w-full" placeholder="Proveedor del producto" required>
            </div>
            <div>
                <label for="receivedBy" class="block text-sm font-medium">Recibido por</label>
                <input type="text" id="receivedBy" name="receivedBy" class="input input-bordered w-full" placeholder="Nombre de quien recibe" required>
            </div>
            <div>
                <button type="submit" class="btn btn-primary w-full">Agregar Producto</button>
            </div>
        </form>
    </div>
`;
