export default function Movie(params) {
    return (
      <video
        controls
        className="top-0 right-0 w-full xl:h-[100vh] h-auto object-cover"
      >
        <source
          src={
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
          }
        />
      </video>
    );
}