import React from "react";
import { Resume, ResumePDF } from "../Images";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "aos/dist/aos.css";
import "../CSS/pdf-render.css";

const PDFRender = () => {
  return (
    <>
      <div
        className="pdf-container pdf-desktop"
        data-aos="flip-up"
        data-aos-delay="300"
      >
        <a href={ResumePDF} download>
          <Button shape="round" icon={<DownloadOutlined />} size="large">
            Download
          </Button>
        </a>
        <img src={Resume} />
      </div>

      <div
        className="pdf-container pdf-mobile"
        data-aos="flip-up"
        data-aos-delay="300"
      >
        <a href={ResumePDF} download className="mobile-download-button">
          <Button shape="round" icon={<DownloadOutlined />} size="large">
            Download
          </Button>
        </a>
        <img src={Resume} className="mobile-resume" />
      </div>
    </>
  );
};

export default PDFRender;
