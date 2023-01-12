import Image from "next/image";

const Carusol = () => {
// <<<<<<< HEAD
  return (
    <div>
      <div className="carousel w-full lg:h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://wallpaperaccess.com/full/1209573.jpg"
            className="w-full "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/485/65/161/stanford-university-hd-wallpaper-wallpaper-preview.jpg"
            className="w-full "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://wallpaperaccess.com/full/1209573.jpg"
            className="w-full "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://thumbs.dreamstime.com/b/princeton-university-one-famous-american-universities-49043534.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
{/* >>>>>>> 5470d4160268c5b3ef9f1c5a94c1f1f625e01f58 */}
        </div>
      </div>
    </div>
  );
};

export default Carusol;
