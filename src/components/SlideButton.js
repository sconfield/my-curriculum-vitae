import React from 'react';
import styles from './SlideButton.css';
import Alert from 'react-s-alert';

function SlideButton(props) {
  // put cards.
  const putCards = ()=>{
    document.querySelector('#putVoice').play();
    props.dispatch({type: 'resume/putAllAnyWhere'});
  };
  // pick up cards.
  const pickUpCards = ()=>{
    document.querySelector('#pickVoice').play();
    props.dispatch({type: 'resume/putOriginalPlaces'});
    Alert.closeAll();
  };

  return (
    <div className={styles.normal}>
      <h3>这里也可以点哦！</h3>
      <div>
        <button onClick={putCards}>再次打乱卡片</button>
        <button onClick={pickUpCards}>回收技能卡</button>
      </div>
    </div>
  );
}

export default SlideButton;
