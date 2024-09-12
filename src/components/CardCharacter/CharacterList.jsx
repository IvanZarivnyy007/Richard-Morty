import { useState } from 'react';

const CharacterList = ({ array }) => {
  return (
    <div>
      <ul>
        {array.map((item) => {
          return (
            <li key={item.id}>
              <UserElement data={item} />
            </li>
          );
        })}
      </ul>
      ;
    </div>
  );
};

export default CharacterList;
