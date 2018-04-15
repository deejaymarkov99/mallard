import React, {Component} from 'react';

import styles from './styles/landing.scss';

class Landing extends Component {
    // return [(
    //   <Card key={element.id} elevation={Elevation.ZERO}>
    //     <h5 className='pt-text-muted'>{element.name}</h5>
    //     <p>{element.message}</p>
    //   </Card>
    // )];
  render() {
    return (
      <div className={styles.pageContainer} >
        <div className={styles.map}>
        </div>
        <div className={styles.cardList}>
        </div>
      </div>
    );
  }
}

export default Landing;
