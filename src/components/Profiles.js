import React from 'react';
import styles from './Profiles.css';

function Profiles(props) {
  const kk = props.msg.kk;
  const vv = props.msg.vv;
  const createItem = (kkk, vvv)=>(
    <div>
      <label>{kkk}</label>
      <input value={vvv} readOnly />
    </div>
  );
  const createLink = (kkk, vvv)=>(
    <div>
      <label>{kkk}</label>
      <a href={vvv} target="_blank">{vvv}</a>
    </div>
  );
  const createBlog = (item, idx)=>(
    <li key={idx}>
      <a href={item.url} target="_blank">{item.name}</a>
      <em>{item.desc}</em>
    </li>
  );
  const createList = (text, idx)=>(
    <li key={idx}>
      {text}
    </li>
  );

  return (
    <div className={styles.normal}>
      <h2>{kk.contact}</h2>
      {createItem(kk.phone, '15523887372')}
      {createItem(kk.Email, 'sconfield@163.com')}
      {createItem(kk.wechat, 'sconfield')}
      <h2>{kk.infomation}</h2>
      {createItem(kk.birthday, '1987/06/27')}
      {createItem(kk.gender, vv.gender)}
      {createItem(kk.marriage, vv.marriage)}
      {createItem(kk.profession, vv.profession)}
      {createItem(kk.work, vv.work)}
      {createLink('常用的 Github', 'http://github.com/sconfield')}
      {createLink('以前的 Github', 'https://github.com/PlayTimeline')}
      <h3>{kk.blog}</h3>
      <ul>
        {vv.blog.map(createBlog)}
      </ul>
      {createItem(kk.job, vv.job)}
      {createItem(kk.money, vv.money)}
      {createItem(kk.city, vv.city)}
      <h2>{kk.education}</h2>
      {vv.education.map(createList)}
      <h2>{kk.certificate}</h2>
      {vv.certificate.map(createList)}
      <h2>{kk.english}</h2>
      <p>{vv.english}</p>
      {vv.enreslist.map(createBlog)}
      <h2>{kk.activity}</h2>
      {vv.activity.map(createBlog)}
    </div>
  );
}

export default Profiles;
