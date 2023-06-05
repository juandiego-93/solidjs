import Card from './Components/Card';
import banner from './assets/banner.png'

function App() {
  return (
    <div class='container m-auto '>
      <header>
        <h1> Ninja Merch</h1>
      </header>
      <img class='rounded-2xl' src={banner} alt="site banner" />
      <div class='grid grid-cols-4 gap-10 my-4'>
      {/* <Card title='Ninja tee'/> */}
      <Card title='Jacket samurai' rounded={true} flat={false}/>
      <Card title='shuriken pants'rounded={false} flat={true}/>

      </div>
    </div>
  );
}

export default App;
