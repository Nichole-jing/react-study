import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/testlistbox.css'

class TestListBox extends Component {
    componentWillMount(){
        console.log('parent componentWillMount')
    }
    render() {
       
        let { testLists, completeLists } = this.props
        return (
            <div className="test-list-box">
                <div className="test-box-now">
                    <div className="test-box-now-txt">
                        <h2 style={{ color: '#000', fontSize: '25px', width: '50%' }}>正在进行</h2>
                        <span>{testLists.length}</span>
                    </div>
                    <ul className="test-box-now-list">
                        {this.getNowTestListDom()}
                    </ul>
                </div>
               
                <div className="test-box-complete">
                    <div className="test-box-now-txt">
                        <h2 style={{ color: '#000', fontSize: '25px', width: '50%' }}>已经完成</h2>
                        <span>{completeLists.length}</span>
                    </div>
                    <ul className="test-box-now-list">
                        {this.getCmpleteListDom()}
                    </ul>
                </div>
            </div>
        )
    }


    // 获取正在完成任务列表DOM
    getNowTestListDom() {
        let { testLists } = this.props
        return testLists.map((item, index) => {
            return (
                <li key={`uid_${index}`} className="">
                    <div>
                        <input type="checkbox" data-value={index} onClick={(e) => { this.handleCompAdd(e) }} />
                        <span>{item}</span>
                    </div>
                    <p onClick={() => { this.handleDelete(index) }}>x</p>
                </li>
            )
        })
    }
    //获取已经完成任务列表列DOM
    getCmpleteListDom() {
        let { completeLists } = this.props
        return completeLists.map((item, index) => {
            return (
                <li key={`uid_${index}`} className="complete-list">
                    <div>
                        <input type="checkbox" checked readOnly disabled />
                        <span>{item}</span>
                    </div>
                    <p onClick={() => { this.handleCompDelete(index) }}>x</p>
                </li>
            )
        })
    }

    // 勾选正在进行的
    handleCompAdd(e) {
        console.log(e)
        this.props.onCompleteAdd(e.target.dataset.value)
        e.target.checked = false
    }
    //删除正在进行的
    handleDelete(i) {
        this.props.onTestListDelete(i)
    }
    //删除已完成的
    handleCompDelete(i) {
        this.props.deleteCompleteList(i)
    }
}
TestListBox.propTypes = {
    completeLists:PropTypes.array,
    testLists:PropTypes.array,
    onCompleteAdd:PropTypes.func,
    onTestListDelete:PropTypes.func,
    deleteCompleteList:PropTypes.func

}
export default TestListBox