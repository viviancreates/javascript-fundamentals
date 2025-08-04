import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Profile2 from "./components/Profile2";
import Card from "./components/Card";
import Welcome2 from "./components/Welcome2";
import Welcome3 from "./components/Welcome3";
import Welcome4 from "./components/Welcome4";

function App() {

  return (
    <>
      <Welcome4 id={5} />
      <Welcome4 id={3} name="Kelsey (default)" />
      <Welcome4 id={4} className="green" name="Brent (override)" />
      {/* <Welcome2 name="Nick" className="green" id={1} />
      <Welcome2 name="Julie" className="blue" id={2} />

      <Welcome3 name="Nick" className="green" id={1} />
      <Welcome3 name="Julie" className="blue" id={2} /> */}

      {/* <Welcome name="Eric" />
      <Welcome name="Joe" />
      <Welcome name="Susan" />
      <Profile name="Bob" age={30}
        isPremium={false} interests={['Coding', 'Gaming', 'Travel']}
      />
      <Profile2 name="Jane" age={33}
        isPremium={true} interests={['Coding', 'Gaming', 'Tennis']}
      />
      <Card>
        <Welcome name="Mary" />
        <h5 className="card-title">This is my title</h5>
        <p className="card-text">
          All of the content inside the Card tag is bound to the children prop.
        </p>
      </Card> */}
    </>
  )
};

export default App;
