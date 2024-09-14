import img from '../../images/1259528.jpg';

const BackgroundImage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    ></div>
  );
};

export default BackgroundImage;
