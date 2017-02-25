import React from 'react';
import styles from './Skills.css';

function Skills(props) {
  const createCard = (item, idx)=>(
    <div key={idx} className={styles.card}>
      <h3>{item.name}</h3>
      <img src={item.url} />
      <strong>{item.desc}</strong>
    </div>
  );

  return (
    <div className={styles.normal}>
      {props.msg.map(createCard)}
    </div>
  );
}

export default Skills;
