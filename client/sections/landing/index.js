import React, {Component} from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import {Card, Elevation} from "@blueprintjs/core";

import styles from './styles/landing.scss';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiamFrZWNhdGFmb3JkIiwiYSI6ImNqZXJpMWhjazBndHAzM3A5bTFxcmV4amEifQ.nL-eTOKnEI15uxoCPH3oAA',
});

const mockPosts = [
  {
    id: 1,
    name: "John Belpo",
    message: "Why do i eat so much god damn food",
  },

  {
    id: 2,
    name: "Elf boy",
    message: "im hardly hungry ever anymore",
  },

  {
    id: 3,
    name: "Where is the beef?",
    message: "tldr im sad",
  },

  {
    id: 4,
    name: "elmo",
    message: "eli roth is a great director",
  },

  {
    id: 5,
    name: "John Belpo",
    message: "Why do i eat so much god damn food",
  },

  {
    id: 6,
    name: "Elf boy",
    message: "im hardly hungry ever anymore",
  },

  {
    id: 7,
    name: "Where is the beef?",
    message: "tldr im sad",
  },

  {
    id: 8,
    name: "elmo",
    message: "eli roth is a great director",
  },
]

export default class Landing extends Component {
  renderCards() {
    return mockPosts.map((element) => {
      return (
        <Card key={element.id} elevation={Elevation.ZERO}>
          <h5 className='pt-text-muted'>{element.name}</h5>
          <p>{element.message}</p>
        </Card>
      );
    })
  }

  render() {
    return (
      <div className={styles.pageContainer} >
        <div className={styles.map}>
          <Map
          style="mapbox://styles/jakecataford/cjfzxug6417r42rl3pvq8azo4"
          containerStyle={{
              height: "390px",
              width: "100vw",
            }}
          />
        </div>
        <div className={styles.cardList}>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}
