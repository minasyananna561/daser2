import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App1 from './App1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import { Page4 } from './components/Page4'
import { Page6 } from './components/Page6'
import { Page7 } from './components/Page7'
import { Page8 } from './components/Page8'
import { Page9 } from './components/Page9'
import { Page10 } from './components/Page10'

import { Navbar } from './Navbar'

import { Page11 } from './components/Page11'
import { Page5 } from './Page5'
import { Page12 } from './components/Page12'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<App1/>}/>
        <Route exact path="page1" element={<App1/>}/>
        <Route exact path="page2" element={<Page2/>}/>
        <Route exact path="page3" element={<Page3/>}/>
        <Route exact path="page4" element={<Page4/>}/>
        <Route exact path="page5" element={<Page5/>}/>

        <Route exact path="page6" element={<Page6/>}/>
        <Route exact path="page7" element={<Page7/>}/>
        <Route exact path="page8" element={<Page8/>}/>
        <Route exact path="page9" element={<Page9/>}/>
        <Route exact path="page10" element={<Page10/>}/>
        <Route exact path="page11" element={<Page11/>}/>
        <Route exact path="page12" element={<Page12/>}/>
    </Routes>
    
    </BrowserRouter>
    // <div>
    //     
    // </div>
  )
}

export default App