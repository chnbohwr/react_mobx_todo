/**
 * Created by Min on 2017/2/9.
 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import '../Style/Intro';

@inject('store')
@observer
export default class Intro extends Component {
    render() {
        return (
            <div className="intro-container">
                <p>A react boilerplate with webpack(2.2.1)、
                React-router(3.0.2)、Mobxjs(3.1.0) and fetch(2.0.2)</p>
                <p className="ajax">Ajax request util : <span>src/Utils/Request.jsx</span></p>

                <h1>{this.props.store.todoList.length}</h1>
            </div>
        );
    }
}
