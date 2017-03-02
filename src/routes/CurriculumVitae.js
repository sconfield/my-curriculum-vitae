import React from 'react';
import { connect } from 'dva';
import styles from './CurriculumVitae.css';
import { Window, TitleBar, Box, SegmentedControl, SegmentedControlItem, Button } from 'react-desktop/macOs';
import Profiles from '../components/Profiles.js';
import Careers from '../components/Careers.js';
import Draggable from 'react-draggable';
import classnames from 'classnames';
import AtvImg from 'react-atv-img';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import water from '../assets/water.mp3';
import SlideButton from '../components/SlideButton.js';
import putmp3 from '../assets/put.mp3';
import pickmp3 from '../assets/pick.mp3';
import { Scrollbars } from 'react-custom-scrollbars';

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
    const clickCardHandle = ()=>{
      document.querySelector('#clickVoice').play();
      if (card.center) {
        props.dispatch({type: 'resume/turnCard', seq: idx});
      } else {
        props.dispatch({type: 'resume/putCenterBigCard', seq: idx});
      }
    };

    return(
      <div key={idx} style={Object.assign({}, card.putWhere)}
        className={classnames(cardClassName)}>
        <div className={styles.stageBox}
          onClick={clickCardHandle}>
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

  // put cards.
  const putCards = ()=>{
    document.querySelector('#putVoice').play();
    props.dispatch({type: 'resume/putAllAnyWhere'});
    Alert.success(
      <SlideButton dispatch={props.dispatch} ptan={words.putAgainBtnName}
        pkn={words.pickBtnName} ppt={words.putPickTip} />
    );
  };
  // pick up cards.
  const pickUpCards = ()=>{
    document.querySelector('#pickVoice').play();
    props.dispatch({type: 'resume/putOriginalPlaces'});
    Alert.closeAll();
  };

  return (
    <div className={styles.normal}>
      <Draggable>
        <Window chrome height="100%" width="100%">
          <TitleBar title={words.title}
            controls onCloseClick={()=>{context.router.push('/');}} />
          <Box padding="5px 10px" height="98%" margin="0 2px">
            <Scrollbars autoHide={true}>
              <Profiles msg={words.profiles} />
            </Scrollbars>
          </Box>
          <Box padding="5px 10px" height="98%" margin="0 2px">
            <SegmentedControl height='100%' style={{overflowX: 'hidden', overflowY: 'auto'}}>
              {words.careers.map(createTab)}
            </SegmentedControl>
          </Box>
          <Box padding="5px 10px" height="98%" margin="0 2px">
            <Button onClick={putCards}>{words.putBtnName}</Button>
            <Button onClick={pickUpCards}>{words.pickBtnName}</Button>
          </Box>
          {words.skills.map(createCard)}
        </Window>
      </Draggable>
      <Alert stack={{limit: 1, spacing: 50}} effect='slide' timeout='none' />
      <audio id="clickVoice">
        <source src={water} type="audio/mp3"></source>
      </audio>
      <audio id="putVoice">
        <source src={putmp3} type="audio/mp3"></source>
      </audio>
      <audio id="pickVoice">
        <source src={pickmp3} type="audio/mp3"></source>
      </audio>
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
