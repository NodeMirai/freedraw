import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './components/header/header'

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

const app = document.createElement('div')
document.body.appendChild(app)

ReactDOM.render(
  <App />,
  app,
)


/* module.exports = Hello */
