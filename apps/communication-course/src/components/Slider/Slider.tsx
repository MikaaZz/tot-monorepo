import './_slider.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

interface SliderContent {
  sliderContents: any
}

function Slider(props: SliderContent) {
  const SliderContent = props.sliderContents.map((content: any) => (
    <SwiperSlide key={content.id}>
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
    </SwiperSlide>
  ))

  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={150}
        className='mySwiper'>
        {SliderContent}
      </Swiper>
    </>
  )
}

export default Slider
