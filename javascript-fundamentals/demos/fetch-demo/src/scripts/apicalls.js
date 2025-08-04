export async function getMovieSummaries() {
    // call the api
    const response = await fetch('http://localhost:8080/api/movies/summaries');

    // check for bad response
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
};

export async function createMovie(movieData) {
    const response = await fetch('http://localhost:8080/api/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieData)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}