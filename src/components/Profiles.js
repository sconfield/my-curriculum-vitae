import React from 'react';
import styles from './Profiles.css';

function Profiles(props) {
  const kk = props.msg.kk;
  const vv = props.msg.vv;
  const createItem = (kkk, vvv)=>(
    <div>
      <label>{kkk}</label>
      <label>{vvv}</label>
    </div>
  );
  const createLink = (kkk, vvv, mail=vvv)=>(
    <div>
      <label>{kkk}</label>
      <a href={mail} target="_blank">{vvv}</a>
    </div>
  );
  const createBlog = (item, idx)=>(
    <li key={idx}>
      <a href={item.url} target="_blank">{item.name}</a>
      <label>{item.desc}</label>
    </li>
  );
  const createList = (text, idx)=>(
    <li key={idx}>
      {text}
    </li>
  );

  return (
    <div className={styles.normal}>
      <h3>{kk.contact}</h3>
      {createItem(kk.phone, '15523887372')}
      {createItem(kk.wechat, 'sconfield')}
      {createLink(kk.Email, 'sconfield@163.com', 'mailto:sconfield@163.com.cn?subject=面试邀请&body=张静你好')}
      <h3>{kk.infomation}</h3>
      {createItem(kk.birthday, '1987/06/27')}
      {createItem(kk.gender, vv.gender)}
      {createItem(kk.marriage, vv.marriage)}
      {createItem(kk.profession, vv.profession)}
      {createItem(kk.work, vv.work)}
      {createItem(kk.job, vv.job)}
      {createItem(kk.money, vv.money)}
      {createItem(kk.city, vv.city)}
      {createLink(kk.newGitub, 'http://github.com/sconfield')}
      {createLink(kk.oldGithub, 'https://github.com/PlayTimeline')}
      {createLink(kk.business, 'http://cqwanyue.com')}
      <h3>{kk.blog}</h3>
      <ul>
        {vv.blog.map(createBlog)}
      </ul>
      <h3>{kk.education}</h3>
      <ul>
        {vv.education.map(createList)}
      </ul>
      <h3>{kk.certificate}</h3>
      <ul>
        {vv.certificate.map(createList)}
      </ul>
      <h3>{kk.english}</h3>
      <p>{vv.english}</p>
      <ul>
        {vv.enreslist.map(createBlog)}
      </ul>
      <h3>{kk.activity}</h3>
      <ul>
        {vv.activity.map(createBlog)}
      </ul>
    </div>
  );
}

export default Profiles;
