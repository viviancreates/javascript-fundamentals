function Card({children}) {
    return (
        <div className="card">
            <div className="card-body">
                {children}
            </div>
        </div>
    );
};

export default Card;