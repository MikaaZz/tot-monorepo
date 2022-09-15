import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './_video.scss'

interface videoLink {
  // isPlay: boolean
  // isMuted: boolean
  link: string
  controls: boolean
  heigth: string
  width: string
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
        height={props.heigth}
        width={props.width}
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
