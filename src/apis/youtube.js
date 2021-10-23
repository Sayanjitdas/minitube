import axios from 'axios'

const KEY = 'AIzaSyBqi5Z67M2HM4vIh9XFEoHvCKzM7EtOMgg';

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: KEY
    }
});