import React from "react";
import Search from "../gifs/Search";
import Feeds from "../gifs/Feeds";
import Loading from '../gifs/Loading'
import { connect } from "react-redux";

const Home = ({ loading}) => {
  return (
    <>
      <div className="container">
        <Search />
      </div>
        {loading ? <Loading/> : <Feeds/>}
    </>
  );
};
const mapStateToProps = (state) => ({
  loading: state.giph.loading,
});
export default connect(mapStateToProps, {})(Home);
