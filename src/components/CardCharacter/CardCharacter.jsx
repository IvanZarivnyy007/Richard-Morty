const CardCharacter = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="card-image" />

      <div className="card-info">
        <h2 className="card-name">{item.name}</h2>
        <p className="card-detail">
          <strong>Status:</strong> {item.status}
        </p>

        <p className="card-detail">
          <strong>Species:</strong>{' '}
          {item.species == 'Human' ? (
            <>
              Human <span className="human-icon"></span>
            </>
          ) : (
            <>
              Alien <span className="alien-icon"></span>
            </>
          )}
        </p>
        <p className="card-detail">
          <strong>Gender:</strong> {item.gender}
        </p>
        <p className="card-detail">
          {/* <strong>Origin:</strong> {item.origin.name} */}
        </p>
        <p className="card-detail ">
          <strong>Location:</strong>{' '}
          <span className="location-hower">{item.location.name}</span>
        </p>
      </div>
    </div>
  );
};

export default CardCharacter;
