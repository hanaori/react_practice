import React from "react"
import ReactDOM from "react-dom"

var count = 1;
function countUp() {
  ReactDOM.render(<Practice count={count}></Practice>, document.getElementById("kaori"))
  count++;
}

setInterval(countUp, 1000)


class Practice extends React.Component {
  render() {
    return (<span>{this.props.count}</span>)
  }
}
