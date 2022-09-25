import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';


import { Provider } from './context/context';
import App from './App';
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="bd02f224-1bb2-41ec-a5be-2eea977c0759" language= "en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>
    , document.getElementById('root'));