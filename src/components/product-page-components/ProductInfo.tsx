import type { Product } from "@/types/product" 

const ProductInfo = ({product}: {product: Product}) => {
  return (
    <section className="space-y-3">
        <h2 className='text-3xl font-bold'>Product Information</h2>
        <table className="w-full text-lg">
            <tbody>
                <tr className="h-10">
                    <td><span className="font-bold">SKU:</span></td>
                    <td>{product.sku}</td>
                </tr>
                <tr className="h-10">
                    <td><span className="font-bold">Product:</span></td>
                    <td>{product.title}</td>
                </tr>
                <tr className="h-10">
                    <td><span className="font-bold">Brand:</span></td>
                    <td>{product.brand}</td>
                </tr>
                <tr className="h-10">
                    <td><span className="font-bold">Width:</span></td>
                    <td>{product.dimensions.width}</td>
                </tr>
                <tr className="h-10">
                    <td><span className="font-bold">Height:</span></td>
                    <td>{product.dimensions.height}</td>
                </tr>
                <tr className="h-10">
                    <td><span className="font-bold">Depth:</span></td>
                    <td>{product.dimensions.depth}</td>
                </tr>
                <tr className="h-10">
                    <td><span className="font-bold">Weight:</span></td>
                    <td>{product.weight}</td>
                </tr>
                <tr className="h-10">
                    <td><span className="font-bold">Warranty:</span></td>
                    <td>{product.warrantyInformation}</td>
                </tr>
                <tr className="h-10">
                    <td><span className="font-bold">Return Policy:</span></td>
                    <td>{product.returnPolicy}</td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

export default ProductInfo