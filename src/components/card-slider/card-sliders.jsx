// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import Card from "../common/cardss";
// import { IoIosArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { getCardItem } from "../../services/services";
// import { useEffect, useState } from "react";
// import CardLoading from "../common/cardss-loading";

// export default function CardSlider({ title, url }) {
//   const [items, setItems] = useState();

//   //https://api.itv.uz/v2/cards/movies/selection-cards?itemsPerPage=12&moduleId=27&page=1&selectionId=36

//   useEffect(() => {
//     getCardItem(url).then(({ data }) => {
//       setTimeout(() => {
//         setItems(data["data"]);
//       }, 5000);
//     });
//   }, [title]);
//   let loading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//   return (
//     <div className="container mt-10">
//       <Link
//         to={"/movies"}
//         className="font-[500]  text-[20px] flex items-center cursor-pointer pb-3 max-w-[350px]"
//       >
//         {title} <IoIosArrowForward className="inline" />
//       </Link>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 3,
//             spaceBetween: 5,
//           },
//           120: {
//             slidesPerView: 2,
//             spaceBetween: 5,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 10,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 20,
//           },
//           1280: {
//             slidesPerView: 6,
//             spaceBetween: 20,
//           },
//         }}
//         modules={[Pagination]}
//         className="!pb-11"
//       >
//         {items
//           ? items.map((item) => (
//               <SwiperSlide key={item}>
//                 <Card item={item} />
//               </SwiperSlide>
//             ))
//           : loading.map((itemss) => (
//               <SwiperSlide key={itemss}>
//                 <CardLoading />
//               </SwiperSlide>
//             ))}
//       </Swiper>
//     </div>
//   );
// }
