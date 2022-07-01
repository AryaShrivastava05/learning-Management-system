import React from 'react'
//import { useEffect } from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css'
import { Navbar,  Sidebar,} from './components';
import { Calendar, ColorPicker, Courses, Discussion, Editor, Liveclasses, Memberships, Schedules, Students, Transaction,Area,Bar,Line} from './pages';


const App = () => {
    const activeMenu = false;
  return (
      <div>
          <BrowserRouter>
              <div className='flex relative dark:bg-main-dark-bg'>
                  <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
                    <TooltipComponent content="Settings" position="Top">
                          <button type="button" className="text-3x1 p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white" style={{ background: 'green',borderRadius: '50%'}}>
                              <FiSettings/>
                          </button>
                  </TooltipComponent>
                  </div> 
                  {activeMenu ? (
                      <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg
                      bg-white'>
                          <Sidebar/>
                      </div>
                  ) : (
                          <div className='w-0
                          dark:bg-secondary-dark-bg'>
                            <Sidebar/>
                          </div>
                  )}
                  <div  className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            } >
                      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar/>
                      </div>    
                </div>
                  <div>
                      <Routes>
                          {/*Dashboard */}
                          
                          <Route path="/" element="Learning Managment System" />
                          <Route path="/learning management system" element="Learing Managment System"/>
                          {/* Pages*/}
                          <Route path="/courses" element={<Courses />}/>
                          <Route path="/students" element={<Students />}/>
                          <Route path="/discussion" element={<Discussion /> }/>
                          <Route path="/schedules" element={<Schedules />}/>
                          <Route path="/liveclasses" element={< Liveclasses />}/>
                          <Route path="/transaction" element= {<Transaction />}/>

                          {/*Apps*/}
                          <Route path="/memberships" element={<Memberships/>}/>
                          <Route path="/editor" element={<Editor/>}/>
                          <Route path="/calendar" element={<Calendar/>}/>
                          <Route path="/color-picker" element={<ColorPicker/>}/>

                           {/*Charts*/}
                          <Route path="/line" element={<Line/>}/>
                          <Route path="/area" element={<Area />}/>
                          <Route path="/bar" element={<Bar />}/>
                                                   
                      </Routes>
                </div>
            </div>
          </BrowserRouter>
    </div>
  )
}

export default App