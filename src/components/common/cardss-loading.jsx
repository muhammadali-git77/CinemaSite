import { FaRegCirclePlay } from "react-icons/fa6";

export default function CardLoading() {
  return (
    <div className="cursor-pointer relative">
      <div className="relative md:h-[260px] lg:h-[280px] xl:h-[340px] w-full overflow-hidden rounded-xl card-itemss">
        <div className="w-full h-full object-cover skeleton" />
        <div className="info-box flex justify-center  items-center flex-wrap absolute w-full h-full top-0 right-0">
          <FaRegCirclePlay size={55} />
          <span className=" p-3 absolute bottom-0 right-0"> </span>
        </div>
      </div>
        
    </div>
  );
}
