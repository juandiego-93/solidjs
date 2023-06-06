import { createSignal } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router'
import banner from './assets/banner.png'
import Home from './Pages/Home';
import Cart from './Pages/Cart' 
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
        <A href='/'>Home</A>
        <A href='/cart'>Cart</A>
      </header>
      <img class='rounded-2xl' src={banner} alt="site banner" />

      <Routes>
        <Route path='/' component={Home}/>
        <Route path='/cart' component={Cart}/>
      </Routes>


    </div>
  );
}

export default App;
