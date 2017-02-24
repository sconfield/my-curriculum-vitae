import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Window, TitleBar, Toolbar, SearchField } from 'react-desktop/macOs';
import AtvImg from 'react-atv-img';
import en from '../assets/github-en.png';
import zh from '../assets/github-zh.png';
import ReactTooltip from 'react-tooltip';

function IndexPage(props, context) {
  const fileArr = [
    {
      tip: "<p>double click me</p><p>open the english</p><p>curriculum vitae</p>",
      name: "zhangjing",
      url: en
    },
    {
      tip: "<p>双击我</p><p>打开中文简历</p>",
      name: "张静",
      url: zh
    }
  ];
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

  /**
   * if tip already, do not do it.
   * if curriculum vitae route, do not do it.
   * if nothing active, do it.
   * @type {[type]}
   */
  const autoTip = ()=>{
    const tipDom = document.querySelector('[data-id="tooltip"]');
    if(tipDom.getAttribute('class').indexOf('show') < 0
      && props.location.pathname == '/') {
      document.querySelector('#tip_0').click();
    }
  };
  const automan = setInterval(autoTip, 6000);

  const doubleClickHandle = (e)=>{
    // TODO: internationalization
    clearInterval(automan);
    const language = e.currentTarget.id;
    context.router.push({
      pathname: '/curriculumVitae',
      query: {
        language: language
      }
    });
  };

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
        delayShow={200} delayHide={300} html={true} />
      {props.children}
    </div>
  );
}

IndexPage.propTypes = {
};

IndexPage.contextTypes = {
  router: React.PropTypes.object
}

export default connect()(IndexPage);
