import React from 'react';
import styles from './Profiles.css';

function Profiles(props) {
  const kk = props.msg.key;
  const vv = props.msg.value;

  return (
    <div className={styles.normal}>
      <h1>{kk.contact}</h1>
      <p>{kk.phone} 15523887372</p>
      <p>{kk.Email} sconfield@163.com</p>
      <p>{kk.wechat} sconfield</p>
      <h1>{kk.infomation}</h1>
      <p>{kk.birthday} 19870627</p>
      <p>{kk.gender} {vv.gender}</p>
      <p>{kk.marriage} {vv.marriage}</p>
      <p>{kk.profession} {vv.profession}</p>
      <p>{kk.work} {vv.work}</p>
      <p>{kk.blog} {vv.blog}</p>
    </div>
  );
}

export default Profiles;
