/**
 * Created by Min on 2017/2/9.
 */
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import '../Style/Todo';

@inject('store')
@observer
export default class Todo extends Component {
    onPress = (event) => {
        if (event.key === 'Enter' && !!event.target.value) {
            const param = {
                text: event.target.value,
                timeStamp: Date.now(),
            };

            this.props.store.todoList.push(param);
            event.target.value = '';
        }
    }

    remove = (index) => {
        this.props.store.todoList.splice(index, 1);
    }

    render() {
        const { todoList } = this.props.store;
        return (
            <div className="todo-container">
                <ul>
                    <li>
                        <input
                            type="text"
                            placeholder="Please input"
                            onKeyPress={this.onPress} />
                    </li>
                    {
                        todoList.map((val, key) => (
                            <li className="list" key={val.timeStamp}>
                                {val.text}
                                <button
                                    onClick={() => this.remove(key)}
                                >&times;</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
