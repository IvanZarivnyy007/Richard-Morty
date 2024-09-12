import { Card } from 'antd';

const CardLocation = ({ data }) => {
  return (
    <Card
      title={data.name}
      bordered={false}
      style={{
        width: 300,
      }}
    >
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
    </Card>
  );
};

export default CardLocation;
