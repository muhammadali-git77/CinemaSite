import cards from "../../assets/Cards.png";


export default function Description(params) {
    
  return (
    <div className=" mt-11 sm:grid block sm:grid-cols-12 grid-rows-1 h-82 gap-4">
      <div className="col-span-3 h-auto ">
        <img className="!w-[220px]  rounded-xl" src={cards} alt="" />
      </div>
      <div className="col-span-9 mt-5 sm:mt-0">
        <b className="text-gray-400">52 min 18+ 2022 Jangari Fantastika AQSh</b>
        <p className="max-w-[600px] mt-5">
          XXVI век. Человечество в лице Космического командования объединенных
          наций вынуждено сражаться с военно- религиозным союзом под названием
          Ковенант. К сожалению, земляне проигрывают инопланетянам по всем
          фронтам, но надежда появляется после того, как в дело вступает
          генетически усовершенствованный солдат Мастер Чиф. Он отправляется на
          странную искусственно созданную планету в виде кольца, чтобы разгадать
          ее предназначение
        </p>
        <div className="flex gap-8">
          <span>Til:</span>
          <span>Uz, ru</span>

      </div>
        <div className="flex gap-3">
          <span>Sifati:</span>
          <span>HD, 4K</span>

      </div>
      </div>
    </div>
  );
}
