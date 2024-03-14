import React from 'react'
import Header from './Header'
import SideBar from './SideBar'

const Layout = ({children}) => {
  return (
    
      <div className="flex h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
    
  )
}

export default Layout
