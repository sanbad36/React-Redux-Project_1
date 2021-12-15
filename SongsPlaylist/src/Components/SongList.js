import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// The meaning of this function is, that bring state of the application to this componnent, which is present in the store.
// That state is -> list of songs from SongList reducer and selected song from Selected song reducer.
const mapStateToProps = (state) => {
  // By convention we are using the same name.
  console.log(state);
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);

// the second prop to the connect component is the action creator. which internally calls the dispatch method, to update the store once and eventually change the state
// of the application.
// without the connect, we have to write, store.dispatch(ationcreatorname());
// which then calls the reducers.
