import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/header'
import Containter from './components/container/container'
import Footer from './components/footer/footer'

import './app.scss'

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
        <Header title={title} />
        <Containter />
        <Footer />
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
