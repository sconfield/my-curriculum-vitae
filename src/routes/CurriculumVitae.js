import React from 'react';
import { connect } from 'dva';
import styles from './CurriculumVitae.css';
import { Window, TitleBar, Box, SegmentedControl, SegmentedControlItem, Button } from 'react-desktop/macOs';
import Profiles from '../components/Profiles.js';
import Careers from '../components/Careers.js';
import Draggable from 'react-draggable';
import classnames from 'classnames';
import AtvImg from 'react-atv-img';

function CurriculumVitae(props, context) {
  // set language
  const language = props.location.query.language;
  let words;
  if (language == 'tip_1') {
    words = props.resume.zh;
  } else {
    words = props.resume.en;
  }

  // create careers tabulation.
  const createTab = (item, idx)=>(
    <SegmentedControlItem key={idx} title={item.name}
      selected={props.resume.tab==idx}
      onSelect={()=>{props.dispatch({type:'resume/selectTab', tab: idx})}}>
      <Careers msg={words.careers[idx]} />
    </SegmentedControlItem>
  );

  // TODO: fix tab, scroll the article.

  // create skills. one skill equale one card.
  const createCard = (item, idx)=>{
    // add card into skill.
    const card = props.resume.cards[idx];
    const cardClassName = {
      [styles.card]: true,
      [styles.cardCenter]: card.center,
      [styles.stageFront]: card.front,
      [styles.stageBack]: !card.front
    };

    return(
      <div key={idx} style={Object.assign({}, card.putWhere)}
        className={classnames(cardClassName)}>
        <div className={styles.stageBox}
          onClick={()=>{props.dispatch({type: 'resume/turnCard', eq: idx});}}>
          <div className={classnames(styles.stage, styles.cardFront)}>
            <h3>{item.name}</h3>
            <AtvImg className={styles.cardImg} layers={[item.url]} />
          </div>
          <div className={classnames(styles.stage, styles.cardBack)}>
            <p>{item.desc}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.normal}>
      <Draggable>
        <Window chrome height="100%" width="100%">
          <TitleBar title={words.title}
            controls onCloseClick={()=>{context.router.push('/');}} />
          <Box padding="10px 30px" height="93%">
            <Profiles msg={words.profiles} />
          </Box>
          <Box padding="10px 30px" height="93%">
            <SegmentedControl box className={styles.ctrlItem}>
              {words.careers.map(createTab)}
            </SegmentedControl>
          </Box>
          <Box padding="10px 30px" height="93%">
            <Button onClick={()=>{props.dispatch({type: 'resume/putAnyWhere'})}}>扔出技能卡</Button>
            <Button onClick={()=>{props.dispatch({type: 'resume/putOriginalPlaces'})}}>回收技能卡</Button>
          </Box>
          {words.skills.map(createCard)}
        </Window>
      </Draggable>
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
