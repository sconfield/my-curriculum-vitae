import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Window, TitleBar, Toolbar, SearchField } from 'react-desktop/macOs';
import AtvImg from 'react-atv-img';
import en from '../assets/github-en.png';
import zh from '../assets/github-zh.png';
import ReactTooltip from 'react-tooltip';
import Draggable from 'react-draggable';
import classnames from 'classnames';

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
  let switchTip = 0;
  const autoTip = ()=>{
    const tipDom = document.querySelector('[data-id="tooltip"]');
    if(tipDom
      && tipDom.getAttribute('class').indexOf('show') < 0
      && props.location.pathname == '/') {
      document.querySelector('#tip_' + switchTip%2).click();
      switchTip++;
    }
  };
  const automan = setInterval(autoTip, 6000);

  // open curriculum vitae.
  const doubleClickHandle = (e)=>{
    clearInterval(automan);
    const language = e.currentTarget.id;
    context.router.push({
      pathname: '/curriculumVitae',
      query: {
        language: language
      }
    });
  };

  // when dragging do not tip.
  const dontTip = ()=>{
    const tipDom = document.querySelector('.show[data-id="tooltip"]');
    if(tipDom) {
      const cls = tipDom.getAttribute('class').replace(/show/, ' ');
      tipDom.setAttribute('class', cls);
    }
  };
  const dragHandle = ()=>{
    dontTip();
  };

  // control window size.
  const winSize = {
    [styles.normal]: !props.resume.idxWinMax,
    [styles.normalMax]: props.resume.idxWinMax
  };
  const ctrlWinSize = (act)=>{
    if (act == 'max') {
      dontTip();
      props.dispatch({type: 'resume/maxWindow'});
    } else if (act == 'min') {
      dontTip();
      props.dispatch({type: 'resume/minWindow'});
    } else if (act == 'close') {
      alert('😭，大哥，再看一眼嘛，别走！');
    }
  };

  return (
    <div className={classnames(winSize)}>
      <Draggable onDrag={dragHandle}>
        <Window chrome height="100%" width="100%">
          <TitleBar title="sconfield's iMac" controls
            onCloseClick={()=>{ctrlWinSize('close')}}
            onMinimizeClick={()=>{ctrlWinSize('min')}}
            onResizeClick={()=>{ctrlWinSize('max')}}>
            <Toolbar height="43" width="200px" horizontalAlignment="right">
              <SearchField placeholder="Search" defaultValue="" />
            </Toolbar>
          </TitleBar>
          {fileArr.map(createResumeFile)}
        </Window>
      </Draggable>
      <ReactTooltip type="info" effect="solid" event="click"
        delayShow={200} delayHide={300} html={true} place="bottom" />
    </div>
  );
}

IndexPage.propTypes = {
};

IndexPage.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    resume: state.resume
  };
}

export default connect(mapStateToProps)(IndexPage);
