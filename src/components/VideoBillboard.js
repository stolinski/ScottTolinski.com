import React from 'react';
import { Transition } from 'react-spring';

import './styles.css';
import { BillboardVideo } from './Headings';

import billboardmp4 from '../pages/showcase2.mp4';
import billboardwebm from '../pages/showcase2.webmhd.webm';

const VideoBillboard = ({ location }) => {
  const isHome = location.pathname === '/';
  return (
    <Transition items={isHome} from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
      {isHome => isHome
        && (styles => (
          <div style={styles} key="billboard">
            <BillboardVideo>
              <source src={billboardmp4} type="video/mp4" />
              <source src={billboardwebm} type="video/webm" />
            </BillboardVideo>
          </div>
        ))
      }
    </Transition>
  );
};

export default VideoBillboard;
