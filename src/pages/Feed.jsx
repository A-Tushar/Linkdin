import React from 'react'
import Account from '../components/Account'
import Postbox from '../components/Postbox'
import Posts from '../components/Posts'

const Feed = () => {


 

  return (
    <>
    <div className="flex w-11/12 mx-auto my-4">
        <div className="w-3/4" >
          <Postbox/>
          <Posts/>
        </div>
        <div className="w-1/4">
            <Account/>
        </div>
    </div>
    </>
  )
}

export default Feed