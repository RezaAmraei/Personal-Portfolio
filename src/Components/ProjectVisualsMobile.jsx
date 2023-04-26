import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";

import {
  TwitterMobile,
  TwitterDesktop,
  TwitterDesktop2,
  EcommerceMobile,
  EcommerceDesktop,
  EcommerceDesktop2,
} from "../Images";
const ProjectVisualsMobile = ({ name }) => {
  const images = {
    mobile: name === "Ecommerce" ? EcommerceMobile : TwitterMobile,
    desktop: name === "Ecommerce" ? EcommerceDesktop : TwitterDesktop,
    desktop2: name === "Ecommerce" ? EcommerceDesktop2 : TwitterDesktop2,
  };
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <div className="mobile-mobile-sc-wrapper">
          <div className="mobile-mobile-sc">
            <CImage
              className="d-block w-100 mobile-mobile-sc"
              src={images.mobile}
              alt="slide 1"
            />
          </div>
        </div>
        <CCarouselCaption className="d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <div className="mobile-images">
          <CImage
            className="d-block w-100"
            src={images.desktop}
            alt="slide 2"
          />
        </div>
        <CCarouselCaption className="d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <div className="mobile-images">
          <CImage
            className="d-block w-100"
            src={images.desktop2}
            alt="slide 3"
          />
        </div>
        <CCarouselCaption className="d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  );
};
export default ProjectVisualsMobile;
