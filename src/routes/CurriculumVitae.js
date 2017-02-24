import React from 'react';
import { connect } from 'dva';
import styles from './CurriculumVitae.css';
import { Window, TitleBar, Box } from 'react-desktop/macOs';
import Profiles from '../components/Profiles.js';
import Careers from '../components/Careers.js';
import Skills from '../components/Skills.js';

function CurriculumVitae(props, context) {
  const closeHandle = ()=>{
    context.router.push('/');
  };
  const language = props.location.query.language;
  console.log(language);

  return (
    <div className={styles.normal}>
      <Window chrome height="100%" width="100%">
        <TitleBar title="zhangjing's Curriculum Vitae" controls onCloseClick={closeHandle} />
        <Box padding="10px 30px" height="93%">
          <Profiles />
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

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(CurriculumVitae);
