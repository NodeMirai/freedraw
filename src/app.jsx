import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import Header from './components/header/header'
import Containter from './components/container/container'
import Footer from './components/footer/footer'
import Chat from './components/chat/chat'



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
      <div className="app">
        <Header title={title} />
        <div style={{ paddingLeft: 5 + '%', marginTop: -3 + 'rem' }}>
          <iframe frameBorder="no" border="0" marginWidth="0" marginHeight="0" width="298" height="52" src="//music.163.com/outchain/player?type=2&id=509728757&auto=0&height=32"></iframe>
        </div>
        {/* <Contentnav /> */}
        <Containter />
        <Chat />
        <Footer />
      </div>
    )
  }
}

const app = document.createElement('div')
document.body.appendChild(app)

ReactDOM.render(
  <Router>
    <Route path="/" component={App}/>
  </Router>,
  app,
)
