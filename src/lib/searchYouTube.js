import YOUTUBE_API_KEY from '../config/youtube.js';
import exampleVideoData from '../data/exampleVideoData.js';

var searchYouTube = (options, callback) => {

  var options = {
    part: 'snippet',
    q: options.query,
    maxResults: options.max,
    key: options.key,
    fields: 'items',
    type: 'video',
    videoEmbeddable: 'true'
  };

  $.get(
    'https://www.googleapis.com/youtube/v3/search', 
    options,
    function(data) {
      callback(data.items);
    }
  );
  
};

export default searchYouTube;
