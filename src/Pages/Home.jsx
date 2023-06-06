import { createResource } from "solid-js"
import Card from "../Components/Card"

async function fetchProducts() {
    const res = await fetch('http://localhost:4000/products')
    return res.json()
}

export default function Home() {
    const [products] = createResource(fetchProducts) 


    return (
        <div class='grid grid-cols-4 gap-10 my-4'>
        {/* <Card /> */}
        <Card rounded={true} flat={false}>
          <h2>Ninja Tee, Black</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate ad illum ipsa cumque, iure eveniet!</p>
          <button class='btn'>View</button>
        </Card>
        <Card rounded={false} flat={true}>
        <h2>Ninja Tee, White</h2>
          <button class='btn'>Click me!</button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate ad illum ipsa cumque, iure eveniet!</p>
          <p>Only S/59</p>
        </Card>

        <p>{console.log(products(), products.loading)}</p>
        </div>
    )
}