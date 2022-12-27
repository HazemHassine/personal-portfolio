import React from "react";
import Navbar from "../components/Navbar/Navbar";

function CvPage() {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar current="My CV"></Navbar>
      <object
        data="https://f004.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z2f717456e5f2cd3d814a0019_f117d8bb0459c4973_d20221226_m235937_c004_v0402013_t0004_u01672099177516"
        type="application/pdf"
        width="100%"
        style={{ height: "100%" }}
      >
        <p>
          Alternative text - include a link
          <br />
          <a href="https://f004.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z2f717456e5f2cd3d814a0019_f117d8bb0459c4973_d20221226_m235937_c004_v0402013_t0004_u01672099177516">
            to the PDF!
          </a>
        </p>
      </object>
    </div>
  );
}

export default CvPage;
