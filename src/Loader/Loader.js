import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";

export const ImageLoader = () => {
    return (
        <div className="Loader">
        <Loader
        type="Hearts"
        color="#3f51b5"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
        </div>
    )
}