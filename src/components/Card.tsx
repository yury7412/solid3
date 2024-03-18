// Card.jsx
import { createSignal } from 'solid-js';
import logobanner1 from "~/img/product.png"

const Card = () => {
  const [hovered, setHovered] = createSignal(false);
  const [isFavorite, setIsFavorite] = createSignal(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite());
  };

  return (
    <div class="p-4 w-[350px] border border-[#E8E9EA] rounded-lg">
      <img
        src={logobanner1} // Используем импортированное изображение
        alt="Placeholder"
        class={`w-full object-cover`}
      />
      <div class={`mt-4`}>
        <a href="" class="text-[1.1rem] text-black font-montserrat text-base font-bold">Силикагелевый наполнитель с фиолетовыми гранулами "DeMurr PREMIUM LAVENDER" 16 л</a>
        
        <div class="flex justify-between items-center mt-[22px]">
          <p class="text-[1.3rem] text-custom-gray font-montserrat text-lg font-bold">899 ₽</p>
          <p class='cursor-pointer' onClick={toggleFavorite}>
            <svg
              width="28.000000"
              height="24.000000"
              viewBox="0 0 28 28"
              fill={isFavorite() ? "#FF6006" : "none"}
              xmlns="http://www.w3.org/2000/svg"
              stroke={isFavorite() ? "#FF6006" : "#FF6006"}
              stroke-width="2.5"
              stroke-linejoin="round"
              class={`transition-colors duration-300 ease-in-out ${hovered() ? "text-[#FF6006]" : "text-black"}`}
            >
              <desc>
                Created with Pixso.
              </desc>
              <path
                d="M13.5 4.08C11 0.79 6.82 -0.22 3.69 2.79C0.56 5.79 0.12 10.82 2.58 14.37C4.62 17.33 10.81 23.57 12.84 25.58C13.06 25.81 13.18 25.92 13.31 25.97C13.42 26 13.55 26 13.66 25.97C13.8 25.92 13.91 25.81 14.14 25.58C16.17 23.57 22.35 17.33 24.4 14.37C26.86 10.82 26.47 5.76 23.28 2.79C20.1 -0.19 15.99 0.79 13.5 4.08Z"
              />
              <path
                d="M3.69 2.79C0.56 5.79 0.12 10.82 2.58 14.37C4.62 17.33 10.81 23.57 12.84 25.58C13.06 25.81 13.18 25.92 13.31 25.97C13.42 26 13.55 26 13.66 25.97C13.8 25.92 13.91 25.81 14.14 25.58C16.17 23.57 22.35 17.33 24.4 14.37C26.86 10.82 26.47 5.76 23.28 2.79C20.1 -0.19 15.99 0.79 13.5 4.08C11 0.79 6.82 -0.22 3.69 2.79Z"
              />
            </svg>
          </p>
        </div>

        <a href="" class="w-full bg-orange block text-center py-2 mt-4 text-white font-medium rounded-lg hover:bg-orange-dark transition duration-300 ease-in-out flex items-center justify-center">В корзину</a>
      </div>
    </div>
  );
};

export default Card;
