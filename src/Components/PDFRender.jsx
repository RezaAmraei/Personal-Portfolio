import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Resume } from "../Images";
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
        <a href={Resume} download>
          <Button shape="round" icon={<DownloadOutlined />} size="large">
            Download
          </Button>
        </a>
        <Document file={Resume}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading={"Loading Resume..."}
            scale={1.6}
          />
        </Document>
      </div>

      <div
        className="pdf-container pdf-mobile"
        data-aos="flip-up"
        data-aos-delay="300"
      >
        <a href={Resume} download className="mobile-download-button">
          <Button shape="round" icon={<DownloadOutlined />} size="large">
            Download
          </Button>
        </a>
        <Document file={Resume}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading={"Loading Resume..."}
            scale={0.7}
          />
        </Document>
      </div>
    </>
  );
};

export default PDFRender;
