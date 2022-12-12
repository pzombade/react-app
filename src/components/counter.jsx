import React, { Component, useEffect } from "react"
import { MyColor } from "./color"

class Counter extends Component {
  constructor() {
    super()
    // this.setState({
    //   date: Date(),
    // })
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.setColor("cyan")
    }, 1000)

    this.setState({
      date: Date(),
    })
  }

  changeDate() {
    this.setState({
      date: Date(),
    })
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.children} : {this.state?.date}
        </h1>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>

        <MyColor
          myCol={(c) => {
            console.log(`In counter : ${c}`)
            this.props.setColor(c)
          }}
        />
      </div>
    )
  }
}

export default Counter
