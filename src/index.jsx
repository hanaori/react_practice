import React from "react"
import ReactDOM from "react-dom"

var count = 1;
function countUp () {
  ReactDOM.render(<span>{count}</span>, document.getElementById("kaori"))
  count++;
}

setInterval(countUp, 1000)
