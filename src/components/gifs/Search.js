import React, { useState } from "react";
import { connect } from "react-redux";
import { searchFeed, clearFeed } from "../../actions/gifAction";

const Search = ({ searchFeed, giphs, clearFeed }) => {
  const [text, setText] = useState('');
  const [alert, setAlert] = useState(false)

  const handleClick = () => {
    clearFeed()
    setText('')
  };
  const searchClick = (e) => {
    e.preventDefault()
    if(text === ''){
      setAlert(true)
    }else{
      setAlert(false)
      searchFeed(text);
    }
  };
  return (
    <>
      <div className="input">
        <form className="form">
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search for something..."
          />
          <button className="searchBtn" onClick={searchClick}>
            search
          </button>
        </form>
      </div>
      {alert && ( <div className="alert center ">
        <p>Please provide some information before you hit Button</p>
      </div> )}
      {giphs.length > 0 && (
        <button className="clearBtn" onClick={handleClick}>
          Clear
        </button>
      )}
    </>
  );
};

const mapStateToProps = (state) =>({
  giphs: state.giph.giphs
})
export default connect(mapStateToProps, { searchFeed, clearFeed })(Search);
