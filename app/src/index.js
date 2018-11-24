import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Colors from './styles/settings/colors';
import Size from './styles/generic/size';
import Reset from './styles/generic/reset';
import Base from './styles/base';

import App from './App';

ReactDOM.render(
  <Fragment>
    <Colors />
    <Size />
    <Reset />
    <Base />
    <App />
  </Fragment>,
  document.getElementById('root')
);