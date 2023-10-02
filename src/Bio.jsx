import gscubaImage from "./images/gscuba.jpg";
// import { Image } from "@unpic/react";
const Bio = () => {
  return (
    <div className='bio'>
      <img src={gscubaImage} alt='gscuba' className='bio-avatar' />
      <p>
        Posts and photography by <strong>Generosa Litton</strong>. I live in
        Puerto Morelos, Mexico and San Francisco, California. This site is
        dedicated to my late nephew, Sean Litton.
      </p>
    </div>
  );
};
export default Bio;
