import React from 'react';
import styles from './SlideButton.css';
import Alert from 'react-s-alert';

function SlideButton({dispatch, ptan, pkn, ppt}) {
  // put cards.
  const putCards = ()=>{
    document.querySelector('#putVoice').play();
    dispatch({type: 'resume/putAllAnyWhere'});
  };
  // pick up cards.
  const pickUpCards = ()=>{
    document.querySelector('#pickVoice').play();
    dispatch({type: 'resume/putOriginalPlaces'});
    Alert.closeAll();
  };

  // do not close.
  setTimeout(function () {
    const alertClose = document.querySelector('span.s-alert-close');
    if (alertClose) {
      alertClose.remove();
    }
  }, 130);

  return (
    <div className={styles.normal}>
      <h3>{ppt}</h3>
      <div>
        <button onClick={putCards}>{ptan}</button>
        <button onClick={pickUpCards}>{pkn}</button>
      </div>
    </div>
  );
}

export default SlideButton;
