export default function VideoDetails({ video }) {
    if(!video){
        return <div></div>
    }
    return (
        <>
        <div className="ratio ratio-16x9 rounded">
            <iframe 
                className="embed-responsive-item rounded"
                src={`https://www.youtube.com/embed/${video.id.videoId}`} 
                title={video.id.videoId}
                allowFullScreen>
            </iframe>
        </div>
        <div className="card mt-2">
            <div className="card-body">
                <h5 className="card-title">{video.snippet.title}</h5>
                <p className="card-text text-muted">{video.snippet.description}</p>
            </div>
        </div>
        </>
    )
}