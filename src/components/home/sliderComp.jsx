import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="mt-5  grid place-items-center w-full">
          <img
            className="lg:h-150 object-cover aspect-video relative w-full"
            src="https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?_gl=1*1b6va1n*_ga*MTU0NzAyNzc3Ni4xNzczMzAxMTUx*_ga_8JE65Q40S6*czE3NzMzMDExNTAkbzEkZzEkdDE3NzMzMDExNTkkajUxJGwwJGgw"
            alt=""
          />
          <div className="absolute bottom-2 z-999 text-white h-40  shadow-sm bg-white/10 p-5 pb-2 backdrop-blur-sm backdrop-brightness-70 rounded-sm lg:w-150  w-full max-w-400">
            <h3 className="text-xl uppercase">Lorem ipsum, dolor</h3>
            <p className=" text-justify line-clamp-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              magnam non illum, expedita esse recusandae. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Aperiam magnam non illum,
              expedita esse recusandae. magnam non illum, expedita esse
              recusandae. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aperiam magnam non illum, expedita esse recusandae.
            </p>
          </div>
        </div>
        <div className="grid place-items-center ">
          <img
            className=" lg:h-150 object-cover aspect-video relative w-full "
            src="https://images.pexels.com/photos/40662/shoes-footwear-hiking-shoes-walking-40662.jpeg?_gl=1*1h7o6u8*_ga*MTU0NzAyNzc3Ni4xNzczMzAxMTUx*_ga_8JE65Q40S6*czE3NzMzMDExNTAkbzEkZzEkdDE3NzMzMDEyMDAkajEwJGwwJGgw"
            alt=""
          />
          <div className="absolute bottom-7 z-999 text-white h-40  shadow-sm bg-white/10 p-5 pb-2 backdrop-blur-sm backdrop-brightness-70 rounded-sm lg:w-150  w-full max-w-400">
            <h3 className="text-xl uppercase">Lorem ipsum, dolor</h3>
            <p className="line-clamp-4 text-justify ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              magnam non illum, expedita esse recusandae. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Aperiam magnam non illum,
              expedita esse recusandae. magnam non illum, expedita esse
              recusandae. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aperiam magnam non illum, expedita esse recusandae.
            </p>
          </div>
        </div>
        <div className="grid place-items-center">
          <img
            className="lg:h-150 object-cover aspect-video relative w-full"
            src="https://images.pexels.com/photos/63196/pexels-photo-63196.jpeg?_gl=1*gzl6wh*_ga*MTU0NzAyNzc3Ni4xNzczMzAxMTUx*_ga_8JE65Q40S6*czE3NzMzMDExNTAkbzEkZzEkdDE3NzMzMDEyMjkkajUxJGwwJGgw"
            alt=""
          />
          <div className="absolute bottom-7 z-999 text-white h-40 shadow-sm bg-white/10 p-5 pb-2 backdrop-blur-sm backdrop-brightness-70 rounded-sm lg:w-150  w-full max-w-400 ">
            <h3 className="text-xl uppercase">Lorem ipsum, dolor</h3>
            <p className="line-clamp-3 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              magnam non illum, expedita esse recusandae. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Aperiam magnam non illum,
              expedita esse recusandae. magnam non illum, expedita esse
              recusandae. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aperiam magnam non illum, expedita esse recusandae.
            </p>
          </div>
        </div>
        <div className="grid place-items-center">
          <img
            className="lg:h-150 object-cover aspect-video relative w-full"
            src="https://images.pexels.com/photos/6766352/pexels-photo-6766352.jpeg?_gl=1*1208tn5*_ga*MTU0NzAyNzc3Ni4xNzczMzAxMTUx*_ga_8JE65Q40S6*czE3NzMzMDExNTAkbzEkZzEkdDE3NzMzMDEzNDckajU5JGwwJGgw"
            alt=""
          />
          <div className="absolute bottom-7 z-999 text-white h-40   shadow-sm bg-white/10 p-5 pb-2 backdrop-blur-sm backdrop-brightness-70 rounded-sm  lg:w-150  w-full max-w-400">
            <h3 className="text-xl uppercase">Lorem ipsum, dolor</h3>
            <p className="line-clamp-4 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              magnam non illum, expedita esse recusandae. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Aperiam magnam non illum,
              expedita esse recusandae. magnam non illum, expedita esse
              recusandae. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aperiam magnam non illum, expedita esse recusandae.
            </p>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default SliderComp;
