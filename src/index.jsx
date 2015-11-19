import React from "react"
import ReactDOM from "react-dom"
import _ from "lodash"

var todoArray = ["list1", "list2"];
function addTodoList() {
  ReactDOM.render(<Practice todoArray={todoArray}></Practice>, document.getElementById("kaori"))
}

setInterval(addTodoList, 1000)


class Practice extends React.Component {
  render() {
      var todos = _.map(this.props.todoArray, (todo, index)=>{
      return (<PracticeTodo todo={todoArray[index]} key={index}></PracticeTodo>)
    })
    return (<ul>{todos}</ul>)
  }
}

class PracticeTodo extends React.Component {
  render() {
    return (<li>{this.props.todo}</li>)
  }
}
