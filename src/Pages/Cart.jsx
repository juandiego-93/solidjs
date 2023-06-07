import Card from "../Components/Card"
import { useCartContext } from "../Context/CartContex"


export default function Cart() {
    const { items } = useCartContext()

    return (
        <div class="max-w-md my-8 mx-auto">
            <Card rounded={true}>
                <h2>Your Shopping cart</h2>
                <For each={items}>
                    {(item) => (
                        <p class='my-3'> {item.title} - S/{item.price} x {item.quantity} </p>
                    )}
                </For>
            </Card>
        </div>
    )
}