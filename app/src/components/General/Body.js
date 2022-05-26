import React from 'react'


function Body({children}) {
  return (
    <div className='px-5 py-10 lg:ml-48 lg:px-7 mb-24 relative min-h-screen'>
        {children}
    </div>
  )
}

export default Body