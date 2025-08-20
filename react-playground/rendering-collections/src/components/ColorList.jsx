import { colors } from "../data/sampleData";

function ColorList() {
    return (
        <>
            <h2>Color List</h2>
            <p>This component uses map() to render list items.</p>
            <ul>
                {colors.map(c => (
                    <li key={c}>{c}</li>
                ))}
            </ul>
        </>
    );
};

export default ColorList;