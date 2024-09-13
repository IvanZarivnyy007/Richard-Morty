import img from '../../images/thumb-1920-1262852.jpg';

const BackgroundImageEpisode = () => {
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

export default BackgroundImageEpisode;
