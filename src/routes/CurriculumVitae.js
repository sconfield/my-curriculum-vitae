import React from 'react';
import { connect } from 'dva';
import styles from './CurriculumVitae.css';
import { Window, TitleBar, Box } from 'react-desktop/macOs';
import Profiles from '../components/Profiles.js';
import Careers from '../components/Careers.js';
import Skills from '../components/Skills.js';

function CurriculumVitae(props, context) {
  const language = props.location.query.language;
  let words;
  if (language == 'tip_1') {
    words = props.resume.zh;
  } else {
    words = props.resume.en;
  }

  const closeHandle = ()=>{
    context.router.push('/');
  };

  return (
    <div className={styles.normal}>
      <Window chrome height="100%" width="100%">
        <TitleBar title="zhangjing's Curriculum Vitae" controls onCloseClick={closeHandle} />
        <Box padding="10px 30px" height="93%">
          <Profiles msg={words.profiles} />
        </Box>
        <Box padding="10px 30px" height="93%">
          <Careers />
        </Box>
        <Box padding="10px 30px" height="93%">
          <Skills />
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
