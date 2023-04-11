import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Resume } from "../Images";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "aos/dist/aos.css";
import "../CSS/pdf-render.css";

const PDFRender = () => {
  return (
    <div className="pdf-container" data-aos="flip-up" data-aos-delay="300">
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
  );
};

export default PDFRender;
