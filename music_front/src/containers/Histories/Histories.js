import React, {Component} from "react";
import HistoryList from "../../components/HistoryList/HistoryList";
import {connect} from "react-redux";
import {fetchHistories} from "../../store/actions/trackHistoriesActions";
import {fetchAlbums} from "../../store/actions/albumsActions";

class Histories extends Component {

    componentDidMount() {
        this.props.onFetchHistories();
        this.props.onFetchAlbums();
    }

    render() {
        return (
            <>
                <h1>
                    Track history
                </h1>
                <HistoryList
                    albums={this.props.albums}
                    histories={this.props.histories}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums.albums,
        histories: state.histories.histories
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchHistories: () => dispatch(fetchHistories()),
        onFetchAlbums: () => dispatch(fetchAlbums())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Histories);