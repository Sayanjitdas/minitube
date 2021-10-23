
import VideoItems from "./VideoItems";

export default function VideoList({videos,onVideoSelect}){

    const renderedList = videos.map(video => {
        return <VideoItems video={video} onVideoSelect={onVideoSelect} key={video.id.videoId}/>
    })

    return (
        <div>
            {renderedList}
        </div>
    );
}