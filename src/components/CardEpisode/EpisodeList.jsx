import { useDispatch, useSelector } from 'react-redux';
import CardEpisode from '../CardEpisode/CardEpisode';
import { useEffect, useState } from 'react';
import { selectArray, selectTotal } from '../../redux/RickandMorty/selectors';
import { Pagination } from 'antd';
import { fetchGetEpisode } from './../../redux/RickandMorty/operations';

const EpisodeList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const array = useSelector(selectArray);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(fetchGetEpisode(page));
  }, [dispatch, page]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="episode-list">
      <ul className="character-grid">
        {array.length > 0 ? (
          array.map((item) => (
            <li key={item.id} className="character-item">
              <CardEpisode elem={item} />
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

export default EpisodeList;
