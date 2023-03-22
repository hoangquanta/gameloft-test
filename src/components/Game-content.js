import './../style/game-content.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import GamePicture from './Game-picture'

function GameContent() {
  return (
    <div className='game-content'>
        <div className='container'>
            <div className='section-title'>Exclusive Game Content</div>
            <div className='section-description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</div>
        </div>
        <div className='game-content-slide'>
            <Splide aria-label="Special Events and GameContental" 
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
                    <GamePicture/>
                </SplideSlide>
                <SplideSlide>
                    <GamePicture/>
                </SplideSlide>
                <SplideSlide>
                    <GamePicture/>
                </SplideSlide>
                <SplideSlide>
                    <GamePicture/>
                </SplideSlide>
                <SplideSlide>
                    <GamePicture/>
                </SplideSlide>
                <SplideSlide>
                    <GamePicture/>
                </SplideSlide>
                <SplideSlide>
                    <GamePicture/>
                </SplideSlide>
                <SplideSlide>
                    <GamePicture/>
                </SplideSlide>
                <SplideSlide>
                    <GamePicture/>
                </SplideSlide>
                <SplideSlide>
                    <GamePicture/>
                </SplideSlide>
            </Splide>
        </div>
    </div>
  );
}

export default GameContent;