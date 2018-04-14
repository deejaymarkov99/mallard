import React from 'react';
import {shallow} from 'enzyme';

import App from '../app.js';

describe('<App>', () => {
  it('matches the snapshot', () => {
      const app = shallow(<App />);
      expect(app.getElement()).toMatchSnapshot();
  });
});
