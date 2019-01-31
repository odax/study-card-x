import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppContextProvider } from './AppContext';

ReactDOM.render(
<AppContextProvider>
    <App />
</AppContextProvider>
,
document.getElementById('root'));

serviceWorker.unregister();
