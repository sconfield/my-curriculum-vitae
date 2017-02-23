import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Window, TitleBar, Toolbar, SearchField } from 'react-desktop/macOs';
import AtvImg from 'react-atv-img';
import en from '../assets/github-en.png';
import zh from '../assets/github-zh.png';

function IndexPage() {
  const doubleClickHandle = e=>{
    alert("lalala");
  };

  return (
    <div className={styles.normal}>
      <Window chrome height="400px" width="600px">
        <TitleBar title="sconfield's iMac" controls>
          <Toolbar height="43" width="200px" horizontalAlignment="right">
            <SearchField placeholder="Search" defaultValue="" />
          </Toolbar>
        </TitleBar>
        <div className={styles.file} onDoubleClick={doubleClickHandle}>
          <AtvImg className={styles.fileIcon} layers={[en]} />
          <label className={styles.fileFont}>zhangjing</label>
        </div>
        <div className={styles.file} onDoubleClick={doubleClickHandle}>
          <AtvImg className={styles.fileIcon} layers={[zh]} />
          <label className={styles.fileFont}>张静</label>
        </div>
      </Window>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
