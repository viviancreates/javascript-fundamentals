import { useState, useEffect } from 'react';
import { formatDate } from '../../scripts/formatting';
import { getMovieSummaries } from '../../scripts/apicalls';

function MovieSummary() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieSummaries = async () => {
            try {
                setLoading(true);
                const data = await getMovieSummaries();
                setMovies(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }   
        }
        
        fetchMovieSummaries();
        
    }, []); // empty array, only run effect on first load

    if (loading) {
        return (
            <div className="container mt-4">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Error!</h4>
                    <p>Failed to fetch movie summaries: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mb-4">Movie Summaries</h2>

                        {movies.length === 0 ? (
                            <div className="alert alert-info" role="alert">
                                No movies found.
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-striped table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Release Date</th>
                                            <th scope="col">Genre</th>
                                            <th scope="col">Rating</th>
                                            <th scope="col">Rating Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {movies.map((movie) => (
                                            <tr key={movie.movieId}>
                                                <td>{movie.movieId}</td>
                                                <td className="fw-bold">{movie.title}</td>
                                                <td>{formatDate(movie.releaseDate)}</td>
                                                <td>
                                                    <span className="badge bg-secondary">
                                                        {movie.genreName || 'Unknown'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary">
                                                        {movie.ratingCode}
                                                    </span>
                                                </td>
                                                <td className="text-muted">
                                                    {movie.ratingDescription}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        <div className="mt-3">
                            <small className="text-muted">
                                Total movies: {movies.length}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieSummary;