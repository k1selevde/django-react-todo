import React from 'react'


import DashBoard from './todo/DashBoard.jsx'
import Header from './Header.jsx'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <DashBoard />
            </div>
        )
    }
}

export default App;


