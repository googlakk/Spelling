import React from 'react';

import stages from '../../utils/stages';
import CardItem from './CardItem';
import styles from './Card.module.scss';

const Card = () => {
  return (
    <>
      <div className={styles.cards}>
        {stages.map((stage) => (
          <CardItem key={stage.id} stage={stage} />
        ))}
      </div>
    </>
  );
};

export default Card;
