import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

import Wrapper from './components/Wrapper';

ReactDOM.render(<Wrapper />, document.getElementById("app"));