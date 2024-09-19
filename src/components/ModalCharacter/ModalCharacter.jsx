import { useState } from 'react';
import Modal from 'react-modal';
import css from './ModalCharacter.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0 0 0  / 50%)',
    boxShadow: '0px 4px 8px rgb(5 255 36 / 81%)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
};

const ModalCharacter = ({ item }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={css['modal']}>
      <button className={css['show-more']} onClick={openModal}>
        Show more
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <button className={css['close']} onClick={closeModal}>
            &times;
          </button>
        </div>

        <div>
          <img src={item.image} alt={item.name} className={css['card-image']} />
          <h2 className={css['card-name']}>
            {item.name}{' '}
            <a className={css['info-character']} href={item.url}>
              Link
            </a>
          </h2>

          <p className={css['card-detail']}>
            <strong>Gender:</strong> {item.gender}
          </p>
          <p className={css['card-detail']}>
            <strong>Origin:</strong> {item.origin?.name}
          </p>
          <p className={`${css['card-detail']} ${css['location-hower']}`}>
            <strong>Location:</strong> <span>{item.location?.name}</span>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCharacter;
