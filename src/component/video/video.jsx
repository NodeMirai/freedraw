import React from 'react'
import './video.scss'


class Video extends React.Component {
  constructor() {
    super()
  }

  // 模版渲染完成后开始渲染初始数据
  componentDidMount() {

  }

  render() {

    return (
      <div id="chat">

        <video id="example-video" data-setup='{}' width="600" height="300" className="video-js vjs-default-skin" controls>
          <source
            src="http://nodemirai.com/hls/test.m3u8"
            type="application/x-mpegURL"></source>
        </video>

      </div>
    )

  }

}

export default Video
