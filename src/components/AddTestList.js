import React, { Component } from 'react'
import Test from './Test'
import '../css/addtestlist.css'
class AddTextList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            testValue:''
        }
    }
    handleChanged(e) {
        this.setState({
            value: e.target.value
        })
    }
    handleAdd(value) {
        if (!value) return
        this.props.onTestListAdd(value)
        this.setState({
            value: '',
            testValue:value
        })
    }
    render() {
        return (
            <div className="add-test-list">
                <span>ToDoList</span>
                <input
                    value={this.state.value}
                    onChange={(e) => { this.handleChanged(e) }}
                    placeholder="添加ToDo" />
                <button onClick={() => { this.handleAdd(this.state.value) }}>提交</button>
                <Test testcont={this.state.testValue}></Test>
            </div>
        )
    }
}

export default AddTextList