
export default function VideoItems({ video,onVideoSelect }) {

    return (
        <div className="card mb-3 shadow-sm" onClick={() => onVideoSelect(video)}>
            <div className="row g-0">
                <div className="col-sm-4">
                    <img src={video.snippet.thumbnails.high.url} className="img-fluid rounded-start" alt={video.snippet.channelTitle} />
                </div>
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title font-size-videoItems">{video.snippet.title}</h5>
                        {/* <p className="card-text text-truncate">{video.snippet.description}</p> */}
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}