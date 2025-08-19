import Welcome from './components/Welcome';
import Profile from './components/profile';
import Profile2 from './components/Profile2';
import Card from './components/Card';
import Welcome2 from './components/Welcome2';
import Welcome3 from './components/Welcome3';
import Welcome4 from './components/Welcome4';

function App() {

  return (
    <>

      <Welcome4 id={3} name="Kelsey (default)" /> // Default (blue)
      <Welcome4 id={4} name="Nick" className="green" /> // Override to green

      {/* <Welcome2 name="Nick" className="green" id={1} />
      <Welcome2 name="Julie" className="blue" id={2} />

      <Welcome3 name="Nick" className="green" id={1} />
      <Welcome3 name="Julie" className="blue" id={2} /> */}

      {/* <Welcome name="Eric"/>
      <Welcome name="Vivian"/>

      <Profile
        name="Bob"
        age={30}
        isPremium={true} 
        interests={['Coding', 'Gaming', 'Travel']}
      />

      <Profile2
        name="Jane"
        age={31}
        isPremium={false} 
        interests={['Coding', 'Gaming', 'Tennis']}
      />

      <Card>
        <h5 className="card-title">This is my Title.</h5>
        <p className="card-text">
          All of the content inside Card tag is bound to the children prop.
        </p>
      </Card>
      */}
    </> 
  );
};

export default App;
