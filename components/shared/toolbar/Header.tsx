import React from 'react'

const Header = ({title}: {title: string}) => {
  return (
    <div className='text-2xl font-bold'>
      {title}
    </div>
  )
}

export default Header
