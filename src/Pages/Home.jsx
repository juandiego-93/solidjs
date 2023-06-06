import Card from "../Components/Card"

export default function Home() {
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
        </div>
    )
}