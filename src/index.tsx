import React from 'react';
import ReactDOM from 'react-dom';
import CompositeProvider from 'src/client/providers/composite/composite.providers';
import { HomePage } from "src/client/page/home";

ReactDOM.render(
    <React.StrictMode>
        <CompositeProvider>
            <HomePage/>
        </CompositeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);