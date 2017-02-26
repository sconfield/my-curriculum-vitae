import React from 'react';
import { connect } from 'dva';
import styles from './CurriculumVitae.css';
import { Window, TitleBar, Box, SegmentedControl, SegmentedControlItem } from 'react-desktop/macOs';
import Profiles from '../components/Profiles.js';
import Careers from '../components/Careers.js';
import Draggable from 'react-draggable';
import classnames from 'classnames';

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
    // init card offset.
    const card = {
      center: true,
      front: true,
      putWhere: {
        top: 100 * idx + 'px',
        left: '100px'
      }
    };
    props.resume.cards[idx] = card;

    // add card into skill.
    const cardClassName = {
      [styles.card]: true,
      [styles.cardCenter]: card.center,
      [styles.stageFront]: card.front,
      [styles.stageBack]: !card.front
    };

    return(
      <div key={idx} className={classnames(cardClassName)}
        style={card.putWhere}>
        <div className={styles.stageBox}
          onClick={()=>{console.log('click card:',idx);}}>
          <div className={classnames(styles.stage, styles.cardFront)}>
            <h3>{item.name}</h3>
            <img src={item.url} />
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
            {words.skills.map(createCard)}
          </Box>
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
