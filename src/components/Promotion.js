import './../style/promotion.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PromotionCard from './Promotion-card'

function Promotion() {
  return (
    <div className='promotion'>
        <div className='container'>
            <div className='section-title'>Special Events & Promotional</div>
            <div className='section-description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</div>
        </div>
        <div className='promotion-slide'>
            <Splide aria-label="Special Events and Promotional" 
                options={ {
                    type: 'loop',
                    autoWidth: 'true',
                    perMove:1,
                    gap: '2vw',
                    focus: 'center',
                    autoplay: true,
                    interval: 3000,
                    arrows: false,
                    pagination: true,
                } }>
                <SplideSlide>
                    <PromotionCard/>
                </SplideSlide>
                <SplideSlide>
                    <PromotionCard/>
                </SplideSlide>
                <SplideSlide>
                    <PromotionCard/>
                </SplideSlide>
                <SplideSlide>
                    <PromotionCard/>
                </SplideSlide>
                <SplideSlide>
                    <PromotionCard/>
                </SplideSlide>
            </Splide>
        </div>
    </div>
  );
}

export default Promotion;