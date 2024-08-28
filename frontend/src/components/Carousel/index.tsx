import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles.css'
import Carousel1 from '../../assets/images/Carousel1.svg'
import Carousel2 from '../../assets/images/Carousel2.svg'

export function Carousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
  }
  return (
    <Slider {...settings}>
      <div>
        <img src={Carousel1} alt="" />
      </div>
      <div>
        <img src={Carousel2} alt="" />
      </div>
    </Slider>
  )
}
