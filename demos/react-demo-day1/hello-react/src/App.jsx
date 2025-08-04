import doggo from './assets/corgi-ball.png'

function App() {
  // This is where we put variables, functions, and other things we need
  const todaysDate = new Date().toLocaleDateString();

  // rendering the markup
  return (
    <>
      <h1>Hello World</h1>
      <p>Today's date is: {todaysDate}</p>
      <img src="/sf-logo.png" alt="skill foundry logo" />
      <img src={doggo} alt="A corgi chasing a ball." />
    </>
  );
}

export default App
