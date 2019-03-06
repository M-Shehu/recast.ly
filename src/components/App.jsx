import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: exampleVideoData,
      selectedVideo: exampleVideoData[0],
      searchValue: ''
    };
    
    this.onListClick = this.onListClick.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
    this.handleTextField = this.handleTextField.bind(this);

  }

  componentDidMount() {
    this.props.searchYouTube( {
      query: 'cats',
      max: 5,
      key: YOUTUBE_API_KEY
    }, function(data) {
      this.setState({
        allVideos: data,
        selectedVideo: data[0]
      });
    }.bind(this));
  }
  

  handleTextField(event) {
   
    var options = {
      query: event.target.value,
      max: 5,
      key: YOUTUBE_API_KEY
    };

    this.setState({searchValue: event.target.value});
    
    this.props.searchYouTube(options, (data) => {
      this.setState({
        allVideos: data,
        selectedVideo: data[0]
      });
    });
  }

  onSearchButtonClick(event) {
    var options = {
      query: this.state.searchValue,
      max: 5,
      key: YOUTUBE_API_KEY
    };

    this.props.searchYouTube(options, (data) => {
      
      this.setState({
        allVideos: data,
        selectedVideo: data[0]
      });
    });
  }

  onListClick(event) {
    let newVideo = this.state.allVideos.filter(v => v.id.videoId === event.target.id)[0];
    this.setState({
      selectedVideo: newVideo
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search query={this.state.searchValue} textFieldChange={this.handleTextField}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selectedVideo}/>
          </div>
          <div className="col-md-5" >
            <VideoList videos = {this.state.allVideos} onClickF = {this.onListClick}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

  
