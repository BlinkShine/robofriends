import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cardlist from './cardlist';
import {robots} from './robots';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render( <Cardlist robots = {robots} />,document.getElementById('root'));
registerServiceWorker();
