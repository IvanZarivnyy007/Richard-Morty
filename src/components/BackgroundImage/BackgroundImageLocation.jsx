import img from '../../images/121212.jpg';

const BackgroundImageLocation = () => {
  return (
    <div>
      <img
        src={img}
        alt="Background"
        style={{
          width: '100%',
          height: 'auto',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default BackgroundImageLocation;
