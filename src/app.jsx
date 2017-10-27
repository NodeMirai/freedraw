import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './components/navbar/navbar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '万事不顺屋',
    }
  }

  render() {
    const { title } = this.state
    return (
      <div>
        <Navbar title={title} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('hehe'),
)


/* module.exports = Hello */
