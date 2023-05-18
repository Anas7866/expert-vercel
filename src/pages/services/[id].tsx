import { GetServerSideProps } from "next";
import React, { useEffect, useMemo } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
var CryptoJS = require("crypto-js");

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  post: Post;
}

function Services(props: any) {
  const router = useRouter();
  const data = router.query && router.query.q ? router.query.q : null;
  const object = useMemo(() => {
    if (typeof data === "string") {
      return JSON.parse(
        CryptoJS.AES.decrypt(data, "selteq").toString(CryptoJS.enc.Utf8)
      );
    }
    return [];
  }, [data]);
  useEffect(() => {
    console.log("--- props ----");
    console.log(object);
    console.log("--- props ----");
  }, [object]);

  // return <p>{JSON.stringify(props)}</p>;
  // const services = props.services;
  return (
    <div className="col-md-12 p-4">
      <div className="col-md-12 px-1">
        {/* <div className="row">
          <div className="col-md-6">
            <h4>
              <b>Browse by category </b>
            </h4>
          </div>
          <div className="col-md-6 text-end m-auto">
            <h6>Show all nested </h6>
          </div>
        </div> */}

        {/* {props && props.industry && (
          <p>{props.industry.industryName.childIndustries}</p>
        )} */}
      </div>
      <div className="col-md-12 px-5">
        <div className="row">
          {object?.map((itm: any, index: any) => (
            <div key={index} className="col-md-4 mt-2 text-center ">
              <div className="col-md-12 border_cards">
                <a
                  style={{ textDecoration: "none", color: "gray" }}
                  href={`/services/Detail/${itm.industryId}`}
                >
                  <div className="col-md-12 ">
                    <Image
                      className="img-fluid w-100"
                      src={itm.industryimageUrl}
                      alt="industryImage"
                      height={200}
                      width={200}
                    />
                  </div>
                  <div className="py-3">
                    <p className="mb-0" key={index}>
                      {itm.industryName}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
