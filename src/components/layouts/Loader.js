import React, { useEffect } from 'react';

const Loader = () => {

  const loaderContainer = React.createRef();
  useEffect(() => {
    setTimeout(() => {
      if(!loaderContainer.current) return;
      loaderContainer.current.style.transition = "opacity 5s";
      loaderContainer.current.style.opacity = "0";
    }, 100);
    // eslint-disable-next-line
  }, [loaderContainer]);

  return(
    <div className="loader-container" ref={loaderContainer}>
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
}

export default Loader;
