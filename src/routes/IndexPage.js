import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Window, TitleBar, Toolbar, SearchField } from 'react-desktop/macOs';
import AtvImg from 'react-atv-img';
import en from '../assets/github-en.png';
import zh from '../assets/github-zh.png';
import ReactTooltip from 'react-tooltip';

function IndexPage(props) {
  const fileArr = [
    {
      tip: "<p>double click me</p><p>open the curriculum vitae</p>",
      name: "zhangjing",
      url: en
    },
    {
      tip: "<p>双击我</p><p>打开简历</p>",
      name: "张静",
      url: zh
    }
  ];
  const doubleClickHandle = (e)=>{
    // TODO: internationalization
    const language = e.currentTarget.id;
    props.history.pushState(null, '/curriculumVitae');
  };
  const createResumeFile = (item, idx)=>{
    return (
      <div className={styles.file}
        onDoubleClick={doubleClickHandle}
        data-tip={item.tip}
        key={idx} id={"tip_"+idx}>
        <AtvImg className={styles.fileIcon} layers={[item.url]} />
        <label className={styles.fileFont}>{item.name}</label>
      </div>
    );
  };

  setTimeout(()=>{
    document.querySelector('#tip_0').click();
  }, 3000);

  return (
    <div className={styles.normal}>
      <Window chrome height="400px" width="600px">
        <TitleBar title="sconfield's iMac" controls>
          <Toolbar height="43" width="200px" horizontalAlignment="right">
            <SearchField placeholder="Search" defaultValue="" />
          </Toolbar>
        </TitleBar>
        {fileArr.map(createResumeFile)}
      </Window>
      <ReactTooltip type="info" effect="solid" event="click"
        delayShow={200} delayHide={800} html={true} />
      {props.children}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
