import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/css/main.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();