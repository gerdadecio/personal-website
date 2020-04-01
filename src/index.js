import React from 'react';
import { render } from 'react-dom'
import ReactGA from 'react-ga';

import App from './pages/App';

import "./assets/css/blk-design-system-react.css";
import "./assets/css/nucleo-icons.css";

render(
  <App />,
  document.getElementById('root')
)

// Google Analytics
ReactGA.initialize('UA-56497904-1');
ReactGA.pageview(window.location.pathname + window.location.search);

