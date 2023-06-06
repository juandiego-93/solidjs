import { createSignal } from 'solid-js';
import Card from './Components/Card';
import banner from './assets/banner.png'

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false)

  const toggleTheme = () =>{
    setDarkTheme(!darkTheme())
  }

  return (
    <div class='container m-auto '>
      <header
        class='my-4 p-2 text-xl flex items-center gap-4 rounded-lg'
        classList={{ 'bg-neutral-900': darkTheme(), 'text-white': darkTheme() }}>
        <span
          class='material-symbols-outlined cursor-pointer'
          onClick={toggleTheme}>
          light_mode
        </span>
        <h1> Ninja Merch</h1>
      </header>
      <img class='rounded-2xl' src={banner} alt="site banner" />
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
    </div>
  );
}

export default App;
