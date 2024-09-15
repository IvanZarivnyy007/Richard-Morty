import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCharacter } from '../../redux/RickandMorty/operations';
import CardCharacter from '../CardCharacter/CardCharacter';
import { useEffect, useState } from 'react';
import { selectArray, selectTotal } from '../../redux/RickandMorty/selectors';
import { Pagination } from 'antd';
import css from './CharacterList.module.css';

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const array = useSelector(selectArray);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(fetchGetCharacter(page));
  }, [dispatch, page]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className={css['character-list']}>
      <ul className={css['character-grid']}>
        {array.length > 0 ? (
          array.map((item) => (
            <li key={item.id} className={css['character-item']}>
              <CardCharacter item={item} />
            </li>
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </ul>
      <Pagination
        current={page}
        pageSize={9}
        total={total}
        onChange={handlePageChange}
        showSizeChanger={false}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
        }}
      />
    </div>
  );
};

export default CharacterList;
