import Card from "./Card";

const Profitable = () => {

    return (
      <div class="mt-[4.375rem]">
        <div class="flex justify-between items-center">
           <h1 class="text-black font-montserrat text-3xl font-semibold leading-11">Выгодные предложения</h1>
           <div class="flex items-center gap-[1.25rem]">
           <a href="" class="text-orange font-montserrat text-lg font-semibold leading-6">В каталог</a>
            <svg width="10.192627" height="17.719238" viewBox="0 0 10.1926 17.7192" fill="none" xmlns="http://www.w3.org/2000/svg">
                <desc>
                        Created with Pixso.
                </desc>
                <defs/>
                <path id="Vector" d="M9.80225 7.91699C10.0522 8.16699 10.1926 8.5061 10.1926 8.85962C10.1926 9.21313 10.0522 9.55225 9.80225 9.80225L2.25952 17.345C2.00806 17.5878 1.67126 17.7222 1.32166 17.7192C0.972168 17.7162 0.637695 17.5759 0.390503 17.3287C0.143311 17.0815 0.00305176 16.7471 0 16.3975C-0.00305176 16.0479 0.131348 15.7111 0.374268 15.4596L6.97424 8.85962L0.374268 2.25964C0.131348 2.00818 -0.00305176 1.67139 0 1.32178C0.00305176 0.972168 0.143311 0.637695 0.390503 0.390503C0.637695 0.143311 0.972168 0.00305176 1.32166 0C1.67126 -0.00292969 2.00806 0.131348 2.25952 0.374268L9.80225 7.91699Z" fill="#FF6006" fill-opacity="1.000000" fill-rule="evenodd"/>
            </svg>
        </div>
        </div>
        <div class="mt-[2.813rem] flex flex-wrap gap-[75px]">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    );
  };
  
  export default Profitable;