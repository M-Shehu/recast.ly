var VideoPlayer = (props) => (
  <div className="video-player">
    {/* {console.log(props.video.id.videoId)}; */}
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id}`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.video.snippet}</h3>
      <div>{props.video.snippet}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
