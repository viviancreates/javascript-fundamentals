import { useState } from 'react';

function CoinFlipper() {
  console.log("rendering component");
  const [message, setMessage] = useState('Click the button to flip a coin.');

  function generateRandomNumber() {
      return Math.floor(Math.random() * 2);
  }

  function flipCoin() {
      console.log("flipping coin");
      const randomNum = generateRandomNumber();
      setMessage(randomNum === 0 ? 'Heads' : 'Tails');
  }
  
  return(
    <div>
      <h1>Coin Flip</h1>
      <button onClick={flipCoin}>Flip Coin</button>
      <p>{message}</p>
    </div>
  );
};

export default CoinFlipper;