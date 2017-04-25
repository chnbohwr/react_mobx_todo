import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';

import Routes from './Router/Index';
import store from './State/index';

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes.routes()} />
    </Provider>,
    document.getElementById('app'),
);
