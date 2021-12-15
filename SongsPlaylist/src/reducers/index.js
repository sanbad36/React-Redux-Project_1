import { combineReducers } from "redux";

// combine reducers are used to combine all the reducers together

const SongReducer = () => {
    return [
        { title: "No Scrubs", duration: "4:05" },
        { title: "Macarena", duration: "2:30" },
        { title: "All Star", duration: "3:15" },
        { title: "I want it That Way", duration: "1:45" },
    ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: SongReducer,
    SelectedSong: SelectedSongReducer,
});