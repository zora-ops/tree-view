import React from 'react'
import { useState } from 'react'

const Mitem = ({ ilist }) => {

    const [showCchild, setShowCchild] = useState(false)

    return (
        <div className='flex flex-col gap-2'>
            <div onClick={() => setShowCchild(prev => !prev)}
                className=' rounded-sm'
            >{ilist.label}</div>
            <div>{

                showCchild && ilist && ilist.children && ilist.children.length > 0 ?
                    ilist.children.map((item, index) => {
                        return <Mitem key={index}
                            ilist={item} />
                    })
                    : null}
            </div>
        </div>
    )
}

export default Mitem