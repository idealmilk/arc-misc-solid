import { createEffect } from 'solid-js';
import { MetaProvider } from 'solid-meta';
import { Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/solid';

import 'swiper/css';

export default function HomePage() {
  const removeEffect = () => {
    Array.from(document.querySelectorAll('.swiper-slide')).forEach(function (
      el
    ) {
      el.classList.remove(
        'swiper-slide-previous',
        'swiper-slide-third',
        'swiper-slide-fourth'
      );
    });
  };

  const hello = () => {
    removeEffect();
    var previousSlide = document.querySelector(
      '.swiper-slide-active'
    ).previousSibling;
    var thirdSlide = document.querySelector('.swiper-slide-next').nextSibling;
    var fourthSlide = thirdSlide.nextSibling;
    previousSlide.classList.add('swiper-slide-previous');
    thirdSlide.classList.add('swiper-slide-third');
    fourthSlide.classList.add('swiper-slide-fourth');
  };

  return (
    <MetaProvider>
      <Swiper
        modules={[Mousewheel, Keyboard]}
        direction='vertical'
        keyboard={true}
        mousewheel={true}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerView={3}
        onTransitionStart={hello}
      >
        <SwiperSlide>
          <p>When Socialists Built our Homes, Joe Mathieson</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            The Far Right's Obsession With Modern Architecture, Joe Mathieson
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            A Small Corner of Enfield shows how good modern social housing can
            be, Joe Mathieson
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Streamline in the suburbs, Joe Mathieson</p>
        </SwiperSlide>
      </Swiper>
    </MetaProvider>
  );
}
