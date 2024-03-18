import categoryone from "~/img/category1.png"
import catcategory from "~/img/catcategoty.png"
import parrotcategory from "~/img/parrotcategory.png"
import fishcategory from "~/img/fishcategory.png"
import rodentscategory from "~/img/rodents.png"

const Category = () => {

  return (
    <div class="mt-[4.375rem]">
      <h1 class="text-black font-montserrat text-3xl font-semibold leading-11">Категория товаров</h1>
      <div class="flex flex-wrap mt-[2.813rem] gap-[4.686rem]">
        <div>
            <img src={categoryone} class="mb-[1.563rem]" />
            <a href="/catalog" class="text-black font-montserrat text-xl font-semibold leading-7 hover:text-orange duration-150">Товары для собак</a>
        </div>

        <div>
            <img src={catcategory} class="mb-[1.563rem]" />
            <a href="/catalog" class="text-black font-montserrat text-xl font-semibold leading-7 hover:text-orange duration-150">Товары для кошек</a>
        </div>

        <div>
            <img src={parrotcategory} class="mb-[1.563rem]" />
            <a href="/catalog" class="text-black font-montserrat text-xl font-semibold leading-7 hover:text-orange duration-150">Товары для птиц</a>
        </div>

        <div>
            <img src={fishcategory} class="mb-[1.563rem]" />
            <a href="/catalog" class="text-black font-montserrat text-xl font-semibold leading-7 hover:text-orange duration-150">Товары для рыб</a>
        </div>

        <div>
            <img src={rodentscategory} class="mb-[1.563rem]" />
            <a href="/catalog" class="text-black font-montserrat text-xl font-semibold leading-7 hover:text-orange duration-150">Товары для грызунов</a>
        </div>
      </div>
    </div>
  );
};

export default Category;
