import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Home from './routes/Home/Home.component';
import About from './routes/About/About.component';
import Contact from './routes/Contact/Contact.component';
import Count from './routes/Count/Count.component';
import Tabs from './routes/Tabs/Tabs.component';
import Users from './routes/Users/Users.component';

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/tabs' component={Tabs} />
            <Route path='/count' component={Count} />
            <Route path="/users/:id/:name" component={Users}/>
        </Fragment>
    </BrowserRouter>,
    document.getElementById('rooter')
);




//ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();