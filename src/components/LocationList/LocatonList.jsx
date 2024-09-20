import { useDispatch, useSelector } from 'react-redux';
import { fetchGetLocation } from '../../redux/RickandMorty/operations';
import { useEffect, useState } from 'react';
import { selectArray, selectTotal } from '../../redux/RickandMorty/selectors';
import { Pagination } from 'antd';
import CardLocation from '../CardLocation/CardLocation';
import css from './LocationList.module.css';

const LocationList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const array = useSelector(selectArray);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(fetchGetLocation(page));
  }, [dispatch, page]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className={css['location-list']}>
      <ul className={css['character-grid']}>
        {array.length > 0 ? (
          array.map((item) => (
            <li key={item.id} className={css['character-item']}>
              <CardLocation data={item} />
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
          marginTop: '30px',
          marginBottom: '30px',
        }}
      />
    </div>
  );
};

export default LocationList;
