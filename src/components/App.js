import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import '../styles/App.css';
import youtube from '../apis/youtube';


class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    onTermSubmit = async (term) => {
        console.log(term);
        let response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({ videos: response.data.items })
        this.setState({selectedVideo: response.data.items[0]})
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand d-flex justify-content-center align-items-center" href="#">
                            <i class="bi bi-play-btn brand-icon"></i>
                            <span className="lead ms-2 ">MiniTube</span>
                        </a>
                        
                    </div>
                </nav>
                <div className="container-lg min-app-width">
                    <SearchBar onTermSubmit={this.onTermSubmit} />
                    <div className="row">
                        <div className="col-lg-8 mb-2 mb-lg-0">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="col-lg-4 justify-content-center">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default App;