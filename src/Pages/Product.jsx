import { useParams } from "@solidjs/router"
import { Show, createResource } from "solid-js"
import { useCartContext } from "../Context/CartContex"

async function fetchProduct(id) {
    const res = await fetch('http://localhost:4000/products/'+ id)
    return res.json()
}

export default function Product() {
    const params = useParams()
    const[product] = createResource(params.id,fetchProduct)
    const { items, setItems } = useCartContext()
    function addProduct() {
        const exists = items.find(p =>p.id === product().id)
        if (exists) {
            setItems(p => p.id === product().id, 'quantity', q => q+1)
        }
        
        if (!exists) {
            setItems([...items, {...product(), quantity: 1}])
        }
        console.log(product())
    }
    
    return (
        <div class="my-7">
        <Show when={product()} fallback={ <p>Loading...</p> }>
        <div class="grid grid-cols-5 gap-7">
            <div class="col-span-2">
                <img src={product().img} alt="product-image" />
            </div>
            <div class="col-span-3">
                <h2 class="text-3xl font-bold mb-7"> {product().title} </h2>
                <p> {product().description} </p>
                <p class="my-7 text-2xl"> Only S/{product().price}.00 </p>

                <button class='btn' onClick={addProduct}>Add to Cart</button>
            </div>
        </div>
        </Show>

        </div>
    )
}