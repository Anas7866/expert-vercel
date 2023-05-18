import React, { useEffect, useState } from "react";
import axios from "axios";
import { Router, useRouter } from "next/router";
import Image from "next/image";
var CryptoJS = require("crypto-js");

// interface Props {
//   data: {
//     id: number;
//     name: string;
//   }[];
// }

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   try {
//     let token =
//       "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJJU1NVRVJfRVhQRVJUIiwiYXVkaWVuY2UiOiJFWFBFUlQiLCJleHBpcmVzIjoiMjAyMy0wNC0wM1QxMDo1NjozOC40ODJaIiwiY2xhaW1zIjoiZXlKbWIyOGlPaUp6YjIxbExXWnZieTEwWlhOMGFXNW5MV05zWVdsdElpd2libUZ0WlNJNkluTm9ZV2dnYTJoaGJHbGtJaXdpWlcxaGFXd2lPaUp6YUdGb2FXUWdZV1p5YVdScGN5SjkiLCJpc3MiOiJJU1NVRVJfRVhQRVJUIiwiYXVkIjoiRVhQRVJUIiwic3ViIjoiRVhQRVJUIiwiaWF0IjoxNjgwNTE5MzM4LCJleHAiOjE2ODA2MDU3Mzh9.OtpgWlku6sGo8BLHlQToIrAWqdzj_DH8GmUKH4vx0_6iFiqPl17q8mcgi3MxFNp1oXw2GkPKL4y5spbbbjdOaBP-H7QmvPKKCkZtgJR1uP6vUCOzd7IM3HiPkp92T7lHgdorCY54r1U-CjeiZ0VDAfpgZnTdc0DnvjPBDvRYP4qykcR_aus258JdgGJaGCU1F4Yl-j1Xe6oaMVETpr-20rk5m8Wb5F4GspXIPkFQCIKoiT-z3GS_u7vFBhVbGBRQGs_wFjooraT56B4JHvICpCnZOQ4qRT_VNIHAvBaeocukI433VVgfCGMhyAcbJW4gOkYPJADkFYksO01-mW8esg";
//     const response: any = await axios.get(
//       "http://172.187.153.193:8090/industry_svc/pb/Industry/GetIndustries"
//     );
//     const data = response.data.result.industries;
//     console.log("---- data result ---");
//     console.log(response.data.result);
//     console.log(JSON.stringify(data));
//     console.log("------ data --------");

//     return {
//       props: {
//         data,
//       },
//       revalidate: 3600, // re-generate the page after 1 hour (in seconds)
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         data: [], // return an empty array if there's an error fetching data
//       },
//       revalidate: 60, // re-generate the page after 1 minute (in seconds)
//     };
//   }
// };

const Services = () => {
  const router = useRouter();
  const [industry, setIndustry] = useState([]);
  useEffect(() => {
    const getIndustries = async () => {
      try {
        const response: any = await axios.get(
          "https://apigateway-preprod.findanexpert.net/industry_svc/pb/Industry/GetIndustries"
        );
        const data = response.data.result.industries;
        setIndustry(data);
      } catch (error) {
        console.log(error);
      }
    };
    getIndustries();
  }, []);

  const handleClickIndustry = (industryOne: any) => {
    var obj = CryptoJS.AES.encrypt(
      JSON.stringify(industryOne.childIndustries),
      "selteq"
    ).toString();
    router.push({ pathname: `/services/1`, query: { q: obj } });
  };

  // const handleClick = (industry: any) => {
  //   const state = { name: "John", age: 30 };
  //   const queryString = new URLSearchParams(
  //     industry.childIndustries
  //   ).toString();
  //   const queryString = JSON.stringify(industry.childIndustries);
  //   alert(JSON.stringify(industry));
  //   let { childIndustries } = industry;
  //   childIndustries?.forEach((itm: any) => {
  //     arr.push(JSON.stringify(itm));
  //   });
  //   let obj = arr.join("|");
  //   console.log(obj);
  //   console.log(arr);
  //   router.push({ pathname: `/services/1`, query: { q: obj } });
  // };
  return (
    <div className="col-md-12 p-4 ">
      <div className="col-md-12 px-1">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <b>Browse by category</b>
            </h4>
          </div>
          <div className="col-md-6 text-end m-auto">
            <h6>Show all </h6>
          </div>
        </div>
      </div>
      <div className="display_flexx ">
        {industry.map((ind: any, index: number) => {
          return (
            <div key={index} className="box_width">
              <a onClick={(e) => handleClickIndustry(ind)}>
                <Image
                  className="img-fluid img_width_ind"
                  src={ind.industryimageUrl}
                  alt="Industry"
                  height={100}
                  width={100}
                />
                <p>{ind?.industryName}</p>
              </a>
            </div>
          );
        })}
        {/* {data?.slice(0, 9)?.map((curel: any,index: number) => {
          console.log("hellllooooo", curel);
          return (
            <div key={index} className="box_width">
              <a onClick={(e) => handleClick(curel)}>
                <Image
                  className="img-fluid img_width_ind"
                  src={curel.industryimageUrl}
                  alt="Industry"
                  height={100}
                  width={100}
                />
                <p>
                  {curel?.industryName}{" "}
                </p>
              </a>
            </div>
          );
        })} */}
        {/* {data ? (<>
       
     
     <p>data coming</p>
     </>) : (
        <> <p>Data not coming from backend</p> </>
     )} */}
      </div>
    </div>
  );
};

export default Services;
