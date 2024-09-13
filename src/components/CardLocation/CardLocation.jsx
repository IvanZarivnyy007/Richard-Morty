const CardLocation = ({ data }) => {
  return (
    <div className="card-location">
      <h2 className="location-name">{data.name}</h2>
      <p className="location-detail">
        <strong>Type:</strong> {data.type}
      </p>
      <p className="location-detail">
        <strong>Dimension:</strong> {data.dimension}
      </p>
      <p className="location-detail">
        <strong>Residents:</strong> {data.residents}
      </p>
    </div>
  );
};

export default CardLocation;
