import doggo from './assets/corgi-ball.png'

function App() {
  //This is where we put variables, functions, and other things we need
  const todaysDate = new Date().toLocaleDateString();


  // The return is for rendering the markup
  return (
    //jsx code goes here
    <>
    <h1>Hello world</h1>
     {/* We have access to anything in this function called App -> use todaysDate */}
    <p>Today's date is: {todaysDate}</p>
    <img src="/cute.jpeg" alt="Cute Image" />
    <img src={doggo} alt="Corgi Ball" />
    </>
  )
}

export default App
