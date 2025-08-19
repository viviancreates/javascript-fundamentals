function Welcome3({name, ...htmlProps}) {
    return(
        <p {...htmlProps}>Welcome {name}</p>
    );
};

export default Welcome3;

//destructuring, list out the porperties we care about that we want to handle individually like your name
//then you can do ... and add any name, 