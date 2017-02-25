import React from 'react';
import { connect } from 'dva';
import styles from './CurriculumVitae.css';
import { Window, TitleBar, Box, SegmentedControl, SegmentedControlItem } from 'react-desktop/macOs';
import Profiles from '../components/Profiles.js';
import Careers from '../components/Careers.js';
import Skills from '../components/Skills.js';

function CurriculumVitae(props, context) {
  // set language
  const language = props.location.query.language;
  let words;
  if (language == 'tip_1') {
    words = props.resume.zh;
  } else {
    words = props.resume.en;
  }

  // close window
  const closeHandle = ()=>{
    context.router.push('/');
  };

  // create careers tabulation.
  const createTab = (item, idx)=>(
    <SegmentedControlItem key={idx} title={item.name}
      selected={props.resume.tab==idx}
      onSelect={()=>{props.dispatch({type:'resume/selectTab', tab: idx})}}>
      <Careers msg={words.careers[idx]} height="100%" />
    </SegmentedControlItem>
  );

  // TODO: fix tab, scroll the article.

  return (
    <div className={styles.normal}>
      <Window chrome height="100%" width="100%">
        <TitleBar title="zhangjing's Curriculum Vitae"
          controls onCloseClick={closeHandle} />
        <Box padding="10px 30px" height="93%">
          <Profiles msg={words.profiles} />
        </Box>
        <Box padding="10px 30px" height="93%">
          <SegmentedControl box className={styles.ctrlItem}>
            {words.careers.map(createTab)}
          </SegmentedControl>
        </Box>
        <Box padding="10px 30px" height="93%">
          <Skills msg={words.skills} />
        </Box>
      </Window>
    </div>
  );
}

CurriculumVitae.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    resume: state.resume
  };
}

export default connect(mapStateToProps)(CurriculumVitae);
