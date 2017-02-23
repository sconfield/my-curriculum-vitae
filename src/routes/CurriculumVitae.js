import React from 'react';
import { connect } from 'dva';
import styles from './CurriculumVitae.css';
import { Window, TitleBar } from 'react-desktop/macOs';

function CurriculumVitae(props) {
  const closeHandle = ()=>{
    props.history.pushState(null, '/');
  };

  console.log(props);

  return (
    <div className={styles.normal}>
      <Window chrome height="100%" width="100%">
        <TitleBar title="Curriculum Vitae" controls onCloseClick={closeHandle}>

        </TitleBar>
      </Window>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(CurriculumVitae);
