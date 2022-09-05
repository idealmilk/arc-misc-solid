import { createEffect, createSignal, For } from 'solid-js';
import { MetaProvider } from 'solid-meta';
import { Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/solid';

import Autumn from './../assets/thumbnails/autumn.jpg';
import Barber from './../assets/thumbnails/barber.jpg';
import Canary from './../assets/thumbnails/canary.jpg';

import 'swiper/css';

export default function HomePage() {
  const [articles, setArticles] = createSignal([
    {
      title: 'When Socialists Built our Homes, Joe Mathieson',
      slug: 'when-socialists-built-our-homes',
      img: Autumn,
    },
    {
      title:
        "The Far Right's Obsession With Modern Architecture, Joe Mathieson",
      slug: 'the-far-rights-obsession-with-modern-architecture',
      img: Canary,
    },
    {
      title:
        'A Small Corner of Enfield shows how good modern social housing can be, Joe Mathieson',
      slug: 'a-small-corner-of-enfield-shows',
      img: Barber,
    },
    {
      title: 'When Socialists Built our Homes, Joe Mathieson',
      slug: 'when-socialists-built-our-homes',
      img: Autumn,
    },
    {
      title:
        "The Far Right's Obsession With Modern Architecture, Joe Mathieson",
      slug: 'the-far-rights-obsession-with-modern-architecture',
      img: Canary,
    },
    {
      title:
        'A Small Corner of Enfield shows how good modern social housing can be, Joe Mathieson',
      slug: 'a-small-corner-of-enfield-shows',
      img: Barber,
    },
    {
      title: 'When Socialists Built our Homes, Joe Mathieson',
      slug: 'when-socialists-built-our-homes',
      img: Autumn,
    },
    {
      title:
        "The Far Right's Obsession With Modern Architecture, Joe Mathieson",
      slug: 'the-far-rights-obsession-with-modern-architecture',
      img: Canary,
    },
  ]);

  const [activeImg, setActiveImg] = createSignal(articles()[0].img);

  console.log(activeImg());

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

  const transitionUpdate = () => {
    removeEffect();
    const activeSlide = document.querySelector('.swiper-slide-active');
    const previousSlide = activeSlide.previousSibling;
    const thirdSlide = document.querySelector('.swiper-slide-next').nextSibling;
    const fourthSlide = thirdSlide.nextSibling;

    previousSlide.classList.add('swiper-slide-previous');
    thirdSlide.classList.add('swiper-slide-third');
    fourthSlide.classList.add('swiper-slide-fourth');

    const activeSlug = activeSlide.getAttribute('data-slug');
    console.log(activeSlug);

    articles().forEach((article, index) => {
      if (article.slug === activeSlug) {
        setActiveImg(article.img);
      }
    });
  };

  return (
    <MetaProvider>
      <img src={activeImg()} alt='Active Image' class='active-img' />
      <Swiper
        modules={[Mousewheel, Keyboard]}
        direction='vertical'
        keyboard={true}
        mousewheel={true}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerView={3}
        onTransitionStart={transitionUpdate}
      >
        <For each={articles()}>
          {(article, i) => (
            <SwiperSlide data-slug={article.slug}>
              <p>{article.title}</p>
            </SwiperSlide>
          )}
        </For>
      </Swiper>
    </MetaProvider>
  );
}
