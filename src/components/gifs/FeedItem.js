import React from "react";
import {Link} from 'react-router-dom'

const FeedItem = ({ gif }) => {
  return (
    <>
      <Link  >
        <div className="card">
          <div className="card-image">
            <img src={gif.images.fixed_height.url} alt="random" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default FeedItem;
