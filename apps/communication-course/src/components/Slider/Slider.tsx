import './_slider.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
interface ShowVideo {
  haveVideo: boolean
  videoLink: string
  videoDescription: string
  videoFont: string
}

function VideoBlock(props: ShowVideo) {
  return (
    <div className='videoBlock__slider'>
      <p className='videoBlock__slider--text'>{props.videoDescription}</p>
      <div className='iframeContainer--video'>
        <iframe
          height='100%'
          width='100%'
          src={`https://www.youtube.com/embed/${props.videoLink}`}
        />
      </div>
      <p className='videoBlock__slider--font'>{props.videoFont}</p>
    </div>
  )
}

function ShowVideo(props: ShowVideo) {
  const haveVideo = props.haveVideo
  if (haveVideo) {
    return (
      <VideoBlock
        haveVideo={props.haveVideo}
        videoLink={props.videoLink}
        videoDescription={props.videoDescription}
        videoFont={props.videoFont}
      />
    )
  }
  return <div></div>
}

interface SliderContent {
  sliderContents: object[]
}

function Slider(props: SliderContent) {
  const SliderContent = props.sliderContents.map((content: any) => (
    <SwiperSlide key={content.id}>
      <div className='sliderContent'>
        <div className='sliderContent__container'>
          <div className='sliderContent__container__textContainer'>
            <h4 className='sliderContent__container__textContainer--title'>
              {content.title}
            </h4>
            <p className='sliderContent__container__textContainer--text'>
              {content.text}
            </p>
            <p className='sliderContent__container__textContainer--text'>
              {content.textTwo}
            </p>
          </div>

          <img
            className='sliderContent__container--image'
            src={`${content.imageLink}`}
          />
        </div>

        <ShowVideo
          haveVideo={content.haveVideo}
          videoLink={content.videoLink}
          videoDescription={content.videoDescription}
          videoFont={content.videoFont}
        />
      </div>
    </SwiperSlide>
  ))

  return (
    <>
      <section className='sliderSection'>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          spaceBetween={150}
          className='mySwiper'>
          {SliderContent}
        </Swiper>
      </section>
    </>
  )
}

export default Slider
