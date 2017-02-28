import React from 'react';
import styles from './Careers.css';

function Careers(props) {
  const company = props.msg;
  const createDepth = (text, idx)=>(
    <li key={idx}>{text}</li>
  );
  const createProject = (item, idx)=>(
    <div key={idx}>
      <h4>{item.name}</h4>
      <p>{item.desc}</p>
      <ul>
        {item.depth.map(createDepth)}
      </ul>
    </div>
  );

  return (
    <div className={styles.normal}>
      <h3>{company.title}</h3>
      {company.project.map(createProject)}
    </div>
  );
}

export default Careers;
