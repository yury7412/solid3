import { onMount } from "solid-js";
import Category from "~/components/Category";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import banner from "~/img/banner.png"; // Импортируем изображение
import logobanner1 from "~/img/logobanner1.png"
import Profitable from "~/components/Profitable";
import Brend from "~/components/Brend";
import Aboutcompany from "~/components/Aboutcompany";

export default function Home() {
  let swiperInstance;

  onMount(() => {
    swiperInstance = new Swiper(".swiper-container", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 5000, // Задержка между переключениями (в миллисекундах)
      },
      // Добавляем границу к слайдеру
      wrapperClass: "swiper-wrapper",
      slideClass: "swiper-slide",
      containerModifierClass: "swiper-container-", 
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
    });
  });

  return (
    <main class="container mx-auto m-10 max-w-[1200px]">
      {/* Добавляем класс для границы */}
        {/* Задаем фиксированную ширину для слайдера */}
        <div class="swiper-container" style="overflow: hidden;">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div
                class="bg-cover bg-center h-[450px] rounded-[10px]"
                style={`background-image: url(${banner})`} // Используем изображение для фона
              >
                <div class="h-full text-white px-[54px] py-[24px]">
                <img src={logobanner1} alt="cart" />
                  <h2 class="text-5xl font-semibold special-offer py-12">Скидка 25%  при <br /> покупке на 300 ₽</h2>
                  <a href="" class="bg-white text-black px-[80px] py-[12px] rounded-[10px] font-montserrat font-medium text-base flex items-center w-[fit-content]">Перейти</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
            <div
                class="bg-cover bg-center h-[450px] rounded-[10px]"
                style={`background-image: url(${banner})`} // Используем изображение для фона
              >
                <div class="h-full text-white px-[54px] py-[24px]">
                <img src={logobanner1} alt="cart" />
                  <h2 class="text-5xl font-semibold special-offer py-12">Скидка 25%  при <br /> покупке на 300 ₽</h2>
                  <a href="" class="bg-white text-black px-[80px] py-[12px] rounded-[10px] font-montserrat font-medium text-base flex items-center w-[fit-content]">Перейти</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
            <div
                class="bg-cover bg-center h-[450px] rounded-[10px]"
                style={`background-image: url(${banner})`} // Используем изображение для фона
              >
                <div class="h-full text-white px-[54px] py-[24px]">
                <img src={logobanner1} alt="cart" />
                  <h2 class="text-5xl font-semibold special-offer py-12">Скидка 25%  при <br /> покупке на 300 ₽</h2>
                  <a href="" class="bg-white text-black px-[80px] py-[12px] rounded-[10px] font-montserrat font-medium text-base flex items-center w-[fit-content]">Перейти</a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>


        <Category></Category>
        <Profitable></Profitable>
        <Brend />
        <Aboutcompany/>
    </main>
  );
}
