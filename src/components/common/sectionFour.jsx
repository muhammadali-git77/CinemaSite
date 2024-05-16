import ITroom1 from "../../assets/ITroom1.png";
import ITroom2 from "../../assets/ITroom2.png";
import ITroom3 from "../../assets/ITroom3.png";
import ITroom4 from "../../assets/ITroom4.png";
import ITroom5 from "../../assets/ITroom5.png";
import ITroom6 from "../../assets/ITroom6.png";
export default function SectionFour(params) {
  return (
    <div>
      <section className="text-gray-600 body-font mt-14">
        <div className="container">
          <div className="grid grid-cols-8 grid-rows-6 gap-4">
            <div
              data-aos="fade-down"
              className="col-span-2 row-span-2 ImageScale"
            >
              <img
                alt="gallery"
                width={"100%"}
                height={"100%"}
                className="w-full object-cover h-full object-center block"
                src={ITroom4}
              />
            </div>
            <div
              data-aos="flip-left"
              className="col-span-2 row-span-2 col-start-3 ImageScale"
            >
              <img
                alt="gallery"
                width={"100%"}
                height={"100%"}
                className="w-full object-cover h-full object-center block"
                src={ITroom3}
              />
            </div>
            <div
              data-aos="fade-right"
              className="col-span-4 row-span-4 col-start-5 ImageScale"
            >
              <img
                alt="galleryrelative "
                width={"100%"}
                height={"100%"}
                className="w-full h-full object-cover object-center block"
                src={ITroom1}
              />
            </div>
            <div
              data-aos="fade-left"
              className="col-span-4 row-span-4 row-start-3 ImageScale"
            >
              <img
                alt="galleryrelative "
                width={"100%"}
                height={"100%"}
                className="w-full h-full object-cover object-center block"
                src={ITroom2}
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-5 row-start-5 ImageScale">
              <img
                alt="gallery"
                width={"100%"}
                height={"100%"}
                className="w-full object-cover h-full object-center block"
                src={ITroom5}
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-7 row-start-5 ImageScale">
              <img
                alt="gallery"
                width={"100%"}
                height={"100%"}
                className="w-full object-cover h-full object-center block"
                src={ITroom3}
              />
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
