import { createSignal } from "solid-js";
import { useLocation } from "@solidjs/router";
import logo from "~/img/logo.svg";
import cart from "~/img/cart.svg";
import favourites from "~/img/favourites.svg";
import account from "~/img/account.svg";

export default function Header() {
  const location = useLocation();
  const active = (path: string) =>
    path === location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";

  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <header class="bg-orange py-3">
      <div class="container mx-auto max-w-[1200px]">
        <div class="flex justify-between items-center">
        <div class="flex items-center gap-16">
            <a href="/"><img src={logo} alt="Logo" /></a>
            <nav class="hidden sm:block">
              <ul class="flex items-center space-x-10">
              <li>
                <a href="/catalog" class="text-white hover:text-hover-header duration-150 font-semibold font-montserrat text-base font-bold leading-5">Каталог</a>
              </li>
              <li>
                  <p class={`text-white cursor-pointer relative font-semibold hover:text-hover-header duration-150`} onClick={() => setIsOpen(!isOpen())}>
                    Контакты
                    <svg class="h-4 w-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    {isOpen() && (
                      <ul class="absolute w-[230px] shadow-lg top-full right-0 bg-white py-[30px] px-[20px] mt-3 rounded-[10px] cursor-auto z-50">
                        <li class="flex gap-4 items-center pb-[10px]">
                        <svg width="17.001221" height="18.254242" viewBox="0 0 17.0012 18.2542" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector" d="M5.12451 12.785C7.07727 14.9009 9.51904 16.4092 12.1942 17.1521C14.2524 17.7198 16.0012 15.8021 16.0012 13.5L16.0012 12.4583C16.0012 11.8833 15.5696 11.4219 15.0417 11.3646C14.1664 11.2711 13.3071 11.0471 12.4884 10.699L11.0271 12.2823C8.64771 11.0465 6.72913 8.96762 5.5885 6.38958L7.0498 4.80625C6.72815 3.91911 6.52112 2.9881 6.43457 2.03958C6.38269 1.46667 5.95679 1 5.42603 1L4.46472 1C2.34009 1 0.57019 2.89479 1.09412 5.125C1.77979 8.02357 3.17175 10.6692 5.12451 12.785Z" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                          </svg>
                          <a href="tel:+79615259191" class="text-black font-medium text-ms">+7 961-525-91-91</a>
                        </li>

                        <li class="flex gap-4 items-center pb-[10px]">
                        <svg width="18.000000" height="15.000000" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <desc>
                              Created with Pixso.
                          </desc>
                          <defs/>
                          <path id="Vector" d="M18 1.875C18 0.84375 17.1899 0 16.2 0L1.80005 0C0.810059 0 0 0.84375 0 1.875L0 13.125C0 14.1562 0.810059 15 1.80005 15L16.2 15C17.1899 15 18 14.1562 18 13.125L18 1.875ZM16.2 1.875L9 6.5625L1.80005 1.875L16.2 1.875ZM16.2 13.125L1.80005 13.125L1.80005 3.75L9 8.4375L16.2 3.75L16.2 13.125Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"/>
                        </svg>

                          <a href="mailto:zooxpress@mail.ru" class="text-black font-medium text-ms">Zooxpress@mail.ru</a>
                        </li>

                        <li class="flex gap-4 items-center pb-[10px]">
                        <svg width="20.833374" height="20.833328" viewBox="0 0 20.8334 20.8333" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <desc>
                              Created with Pixso.
                          </desc>
                          <defs/>
                          <path id="Vector" d="M10.4166 0C16.1698 0 20.8334 4.66354 20.8334 10.4167C20.8334 16.1698 16.1698 20.8333 10.4166 20.8333C4.66357 20.8333 0 16.1698 0 10.4167C0 4.66354 4.66357 0 10.4166 0ZM10.4166 2.08333C8.20654 2.08333 6.08691 2.9613 4.52417 4.52411C2.9613 6.08691 2.08337 8.20653 2.08337 10.4167C2.08337 12.6268 2.9613 14.7464 4.52417 16.3092C6.08691 17.872 8.20654 18.75 10.4166 18.75C12.6268 18.75 14.7465 17.872 16.3092 16.3092C17.8721 14.7464 18.75 12.6268 18.75 10.4167C18.75 8.20653 17.8721 6.08691 16.3092 4.52411C14.7465 2.9613 12.6268 2.08333 10.4166 2.08333ZM10.4166 4.16667C10.6718 4.1667 10.9181 4.26038 11.1088 4.42992C11.2994 4.59946 11.4211 4.83307 11.451 5.08646L11.4584 5.20833L11.4584 9.98541L14.2781 12.8052C14.465 12.9927 14.5734 13.2442 14.5815 13.5087C14.5896 13.7733 14.4967 14.0309 14.3217 14.2295C14.1466 14.428 13.9026 14.5524 13.639 14.5775C13.3756 14.6026 13.1125 14.5265 12.9031 14.3646L12.8052 14.2781L9.68018 11.1531C9.51831 10.9911 9.41431 10.7802 9.3844 10.5531L9.375 10.4167L9.375 5.20833C9.375 4.93207 9.48474 4.66711 9.68005 4.47177C9.87549 4.27641 10.1404 4.16667 10.4166 4.16667Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"/>
                        </svg>

                          <p class="text-black font-medium text-ms">График работы: <br />Пн-Сб 9:00-18:00</p>
                        </li>

                        <li class="flex gap-4 items-center pb-[10px]">
                        <svg width="16.000000" height="21.333328" viewBox="0 0 16 21.3333" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <desc>
                              Created with Pixso.
                          </desc>
                          <defs/>
                          <path id="Vector" d="M13.5547 11.92C12.856 13.336 11.9093 14.7467 10.9413 16.0133C10.0221 17.2067 9.04028 18.3505 8 19.44C6.95972 18.3505 5.97791 17.2067 5.05872 16.0133C4.0907 14.7467 3.14404 13.336 2.44531 11.92C1.73865 10.4893 1.33337 9.14934 1.33337 7.99998C1.33337 6.23189 2.03577 4.53621 3.28601 3.28596C4.53625 2.03571 6.23193 1.33333 8 1.33333C9.76807 1.33333 11.4637 2.03571 12.714 3.28596C13.9642 4.53621 14.6666 6.23189 14.6666 7.99998C14.6666 9.14934 14.26 10.4893 13.5547 11.92ZM8 21.3333C8 21.3333 16 13.752 16 7.99998C16 5.87828 15.1571 3.84343 13.6569 2.34314C12.1566 0.84285 10.1217 0 8 0C5.8783 0 3.84338 0.84285 2.34314 2.34314C0.842896 3.84343 0 5.87828 0 7.99998C0 13.752 8 21.3333 8 21.3333Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"/>
                          <path id="Vector" d="M8 10.6666C7.29272 10.6666 6.6145 10.3857 6.11438 9.8856C5.61426 9.38551 5.33337 8.70723 5.33337 7.99998C5.33337 7.29274 5.61426 6.61446 6.11438 6.11436C6.6145 5.61427 7.29272 5.33333 8 5.33333C8.70728 5.33333 9.3855 5.61427 9.88562 6.11436C10.3857 6.61446 10.6666 7.29274 10.6666 7.99998C10.6666 8.70723 10.3857 9.38551 9.88562 9.8856C9.3855 10.3857 8.70728 10.6666 8 10.6666ZM8 12C9.06091 12 10.0782 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99998C12 6.93913 11.5786 5.92171 10.8284 5.17155C10.0782 4.4214 9.06091 3.99998 8 3.99998C6.93909 3.99998 5.92175 4.4214 5.17163 5.17155C4.42139 5.92171 4 6.93913 4 7.99998C4 9.06084 4.42139 10.0783 5.17163 10.8284C5.92175 11.5786 6.93909 12 8 12Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"/>
                        </svg>


                          <p class="text-black font-medium text-ms">г. Самара, <br />Ленинградская 114</p>
                        </li>

                        <div class="flex gap-[10px] mt-[40px]">
                          <a href=""><svg width="35.000000" height="35.000000" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs>
                              <clipPath id="clip404_2018">
                                <rect id="Frame 4" rx="9.500000" width="34.000000" height="34.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                              </clipPath>
                            </defs>
                            <g clip-path="url(#clip404_2018)">
                              <path id="Vector" d="M18.8206 20.1487C21.1077 20.4974 21.8308 22.2974 23.2872 23.5538L27 23.5538C26.0718 21.4815 24.6868 19.646 22.9487 18.1846C24.2821 16.3487 25.6974 14.6205 26.3898 12L23.0154 12C21.6923 14.0051 20.9949 16.3539 18.8206 17.9026L18.8206 12L13.9231 12L15.0923 13.4462L15.0923 18.6C13.1948 18.3795 11.9128 14.9077 10.5231 12L7 12C8.2821 15.9282 10.9795 24.5487 18.8206 23.5538L18.8206 20.1487Z" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                            </g>
                            <rect id="Frame 4" rx="9.500000" width="34.000000" height="34.000000" transform="translate(0.500000 0.500000)" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="1.000000"/>
                          </svg>
                          </a>

                          <a href=""><svg width="35.000000" height="35.000000" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <desc>
                                  Created with Pixso.
                              </desc>
                              <defs>
                                <clipPath id="clip404_2015">
                                  <rect id="Frame 34" rx="9.500000" width="34.000000" height="34.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                                </clipPath>
                              </defs>
                              <g clip-path="url(#clip404_2015)">
                                <path id="Vector" d="M25.9419 10.5665L23.3777 24.9721C23.1985 25.9964 22.6792 26.2429 21.9624 25.7664L15.8459 20.3821C15.8223 20.3618 15.803 20.3351 15.7896 20.3041C15.7762 20.2731 15.7693 20.2389 15.7693 20.204C15.7693 20.1693 15.7762 20.1349 15.7896 20.104C15.803 20.0731 15.8223 20.0463 15.8459 20.026L22.9091 12.4234C23.2307 12.0838 22.8401 11.9195 22.4174 12.2262L13.5529 18.8922C13.526 18.9131 13.4955 18.9264 13.4636 18.9312C13.4318 18.9359 13.3994 18.932 13.3691 18.9196L9.60547 17.5009C8.76917 17.2106 8.76917 16.526 9.79395 16.0385L24.8528 9.11502C24.9723 9.04672 25.1019 9.00763 25.2343 9C25.7581 9 26.1533 9.54773 25.9419 10.5665Z" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                              </g>
                              <rect id="Frame 34" rx="9.500000" width="34.000000" height="34.000000" transform="translate(0.500000 0.500000)" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="1.000000"/>
                            </svg>
                            </a>                                                    
                        </div>
                      </ul>
                    )}
                  </p>
                </li>
              </ul>
            </nav>
          </div>
          <div class="flex items-center space-x-2">
            <button class="text-gray-200 hover:text-white">
              <img src={cart} alt="cart" />
            </button>
            <button class="text-gray-200 hover:text-white">
                 <img src={favourites} alt="favourites" />
            </button>
            <button class="text-gray-200 hover:text-white">
               <img src={account} alt="cart" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
