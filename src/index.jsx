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
    return (
      <div>
        <input type="text" ref="input"></input><a onClick={this.addTodo.bind(this)}>button</a>
        <ul>{todos}</ul>
      </div>
    )
  }
  addTodo() {
    this.props.todoArray.push(this.refs.input.value)
  }
}

class PracticeTodo extends React.Component {
  render() {
    return (<li>{this.props.todo}</li>)
  }
}
