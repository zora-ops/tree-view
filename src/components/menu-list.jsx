import React from 'react'
import Mitem from './menu-item'

const Mlist = ({ list}) => {
    return (
        <div className='font-bold '>
            {
                list && list.length ?
                    list.map((item,index) => {
                        return <Mitem key={index} ilist={item}/>
                    })
                    : null
            }
        </div>
    )
}

export default Mlist