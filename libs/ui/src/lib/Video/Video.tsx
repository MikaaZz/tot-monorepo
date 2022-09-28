import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './_video.scss'

interface videoLink {
  // isPlay: boolean
  // isMuted: boolean
  link: string
  controls: boolean
}

function Main_Video(props: videoLink) {
  return (
    <div className='video_player--main'>
      <ReactPlayer
        onEnded={() => {
          setTimeout(() => {
            window.scroll({
              top: 937,
              behavior: 'smooth',
            })
          }, 1500)
        }}
        controls={props.controls}
        style={{ backgroundColor: 'black' }}
        url={props.link}
        volume={0.5}
        height={'100%'}
        width={'100%'}
        config={{
          vimeo: {
            playerOptions: {
              autoplay: true,
            },
          },
        }}
      />
    </div>
  )
}

export default Main_Video
