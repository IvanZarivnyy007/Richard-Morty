import img from '../../images/121212.jpg';

const BackgroundImageLocation = () => {
  return (
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
  );
};

export default BackgroundImageLocation;
