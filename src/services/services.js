import instance from "./poster";

export async function getCardItem(url) {
  let response = await instance.get(url);
  return response;
}

export async function getModuls() {
  let response = await instance.get("v2/home/get-selections?itemsPerPage=3&page=1");
  return response

}
export async function getMovie(id,slug) {
  let response = await instance.get(
    `_next/data/1.19.1/uz/detail/${id}/${slug}.json?movieId=${id}&slug=${slug}`
  );
  return response

}

// export async function getCardItem() {
//   try {
//     let response = await instance.get(
//       "v2/cards/movies/selection-cards?itemsPerPage=12&moduleId=27&page=1&selectionId=36"
//     );
//     return response;
//   } catch (error) {
//     console.error("Error fetching card items:", error);
//     throw error;
//   }
// }
