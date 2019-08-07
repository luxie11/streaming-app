import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../history'

import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'

import Header from './Header'

class App extends React.Component{
    render(){
        return(
            <div className="ui">
                <Router history={createBrowserHistory}>
                <Header />
                    <div className=" ui container">
                        <Switch>
                            <Route path="/" exact component={StreamList} />
                            <Route path="/streams/new" exact component={StreamCreate} />
                            <Route path="/streams/edit/:id" exact component={StreamEdit} />
                            <Route path="/streams/delete/:id" exact component={StreamDelete} />
                            <Route path="/streams/:id" exact component={StreamShow} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;