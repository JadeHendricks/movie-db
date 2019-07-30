import React from 'react';
import ctaBackgroundImage from "../../images/ctaBG.jpg";

const CTA = () => {

  const ctaBackground = {
    backgroundImage: `url(${ctaBackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top",
    backgroundSize: "cover"
  }

  return (
    <section className="cta" style={ ctaBackground }>
      <div className="cta__contentHolder">
          <h3 className="cta__title">
            Receive information on the latest hit movies straight to your inbox.
          </h3>
          <button className="button button--purple">Subscribe</button>
      </div>
    </section>
  )
}

export default CTA;