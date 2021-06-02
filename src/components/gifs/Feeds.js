import React from "react";
import { connect } from "react-redux";
import FeedItem from "./FeedItem";

const Feeds = ({ giphs }) => {
  if(giphs.length < 1){
    return (
      <div className="msg center container">
        <p>Search your Gifs in just a minute</p>
      </div>
    );
  }
    return (
      <div className="feeds">
        <div className="row">
          {giphs.map((gif) => (
            <div className="col s6 m3">
              <FeedItem gif={gif} key={gif.id} />
            </div>
          ))}
        </div>
      </div>
    );
     
};
const mapStateToProps = (state) => ({
  giphs: state.giph.giphs,
});

export default connect(mapStateToProps, {  })(Feeds);
