import React from 'react'
class Test extends React.Component {
    componentWillMount(){
        console.log('child componentWillMount')
    }
    render() {
        console.log('孩子 render')
        return <div style={{color:'red'}}>{this.props.testcont}</div>
    }
   // 提升组件性能：可以避免一个组件做多于的render操作，render函数重新执行，就意味着
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.testcont !== this.props.testcont){
            return true
        }else{
            return false
        }
    }
  

}
export default Test