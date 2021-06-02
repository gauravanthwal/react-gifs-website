import React from 'react'
import gif from './loading.gif'

const Loading = () => {
    return (
      <div className="loadingBox">
        <img src={gif} alt="Loading..." />
      </div>
    );
}



export default Loading
