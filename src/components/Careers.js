import React from 'react';
import styles from './Careers.css';
import { SegmentedControl, SegmentedControlItem } from 'react-desktop/macOs';

function Careers() {
  return (
    <div className={styles.normal}>
      Component: Careers
      <SegmentedControl box>
        <SegmentedControlItem title="dx">
          content one
        </SegmentedControlItem>
        <SegmentedControlItem title="ultral power">
          content two
        </SegmentedControlItem>
        <SegmentedControlItem title="asiainfo">
          content three
        </SegmentedControlItem>
      </SegmentedControl>
    </div>
  );
}

export default Careers;
