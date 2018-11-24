import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Colors from './styles/settings/colors';
import Reset from './styles/generic/reset';
import Base from './styles/base';

import App from './App';

ReactDOM.render(
  <Fragment>
    <Colors />
    <Reset />
    <Base />
    <App />
  </Fragment>,
  document.getElementById('root')
);