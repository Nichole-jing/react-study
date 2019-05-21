import React, { Fragment, Component } from 'react';
import Axios from 'axios'
import AddTestList from './components/AddTestList'
import TestListBox from './components/TestListBox'
import url from "./api/index";
import './mock/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.onTestListDelete = this.onTestListDelete.bind(this)
    this.state = {
      testLists: [],
      completeLists: []
    }
  }
  componentDidMount() {
    console.log(url['test'])
    Axios.get(url['test']).then((res)=>{
      this.setState(()=>({
        testLists:[...res.data.ary]
      }))
    }).catch((err)=>{alert('err')})
  }

  onTestListAdd(value) {
    if (!value) return
    this.setState({
      testLists: [value, ...this.state.testLists]
    })
  }
  onCompleteAdd(index) {
    if (!index) return
    let value = this.state.testLists[parseInt(index)]
    this.setState({
      completeLists: [value, ...this.state.completeLists]
    })
    this.onTestListDelete(index)
  }

  // 下面俩是删除
  onTestListDelete(index) {
    // this.state.testLists.splice(index, 1)
    // immutable
    // state 不允许被直接操作(不允许被做任何的改变)，若要改变，则拷贝一个副本出来，进行处理
    const list = [...this.state.testLists]
    list.splice(index, 1)
    this.setState({
      testLists: list
    })
  }
  deleteCompleteList(i) {
    //this.setState接收函数时，是异步操作！！！
    // `this.setState`接收的函数有两个参数，第一个`prevState`：修改数据之前的那次数据 等价于 `this.state`
    this.setState((preState) => {
      const list = [...preState.completeLists]
      list.splice(i, 1)
      return {
        completeLists: list
      }
    })

  }
  render() {
    return (
      <Fragment>
        <AddTestList
          onTestListAdd={(test) => { this.onTestListAdd(test) }}
        ></AddTestList>

        <TestListBox
          testLists={this.state.testLists}
          completeLists={this.state.completeLists}
          onCompleteAdd={(test) => this.onCompleteAdd(test)}
          onTestListDelete={this.onTestListDelete}
          deleteCompleteList={(index) => { this.deleteCompleteList(index) }}
        ></TestListBox>
      </Fragment>
    );
  }


}

export default App;
