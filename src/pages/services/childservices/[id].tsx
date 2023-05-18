import axios from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps<any> = async ({
  params,
}) => {
  try {
    console.log("--------- params id ------------");
    console.log(params);
    console.log("--------- params id ------------");
    let token =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJJU1NVRVJfRVhQRVJUIiwiYXVkaWVuY2UiOiJFWFBFUlQiLCJleHBpcmVzIjoiMjAyMy0wNC0wM1QxMDo1NjozOC40ODJaIiwiY2xhaW1zIjoiZXlKbWIyOGlPaUp6YjIxbExXWnZieTEwWlhOMGFXNW5MV05zWVdsdElpd2libUZ0WlNJNkluTm9ZV2dnYTJoaGJHbGtJaXdpWlcxaGFXd2lPaUp6YUdGb2FXUWdZV1p5YVdScGN5SjkiLCJpc3MiOiJJU1NVRVJfRVhQRVJUIiwiYXVkIjoiRVhQRVJUIiwic3ViIjoiRVhQRVJUIiwiaWF0IjoxNjgwNTE5MzM4LCJleHAiOjE2ODA2MDU3Mzh9.OtpgWlku6sGo8BLHlQToIrAWqdzj_DH8GmUKH4vx0_6iFiqPl17q8mcgi3MxFNp1oXw2GkPKL4y5spbbbjdOaBP-H7QmvPKKCkZtgJR1uP6vUCOzd7IM3HiPkp92T7lHgdorCY54r1U-CjeiZ0VDAfpgZnTdc0DnvjPBDvRYP4qykcR_aus258JdgGJaGCU1F4Yl-j1Xe6oaMVETpr-20rk5m8Wb5F4GspXIPkFQCIKoiT-z3GS_u7vFBhVbGBRQGs_wFjooraT56B4JHvICpCnZOQ4qRT_VNIHAvBaeocukI433VVgfCGMhyAcbJW4gOkYPJADkFYksO01-mW8esg";
    const response: any = await axios.get(
      `http://172.187.153.193:8084/serviceInventory_svc/pb/Service/GetAllChildServices?id=${params?.id}`
    );
    const data = response.data.result;
    console.log("---- data result ---");
    console.log(response.data.result);
    console.log(JSON.stringify(data));
    console.log("------ data --------");

    return {
      props: {
        data, // re-generate the page after 1 hour (in seconds)
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: [], // return an empty array if there's an error fetching data
        revalidate: 60, // re-generate the page after 1 minute (in seconds)
      },
    };
  }
};

function childservices(props: any) {
  return (
    <div className="col-md-12 px-5">
      <div className="col-md-12">
        {/* <p>{JSON.stringify(props.data.childServices)}</p>
      {props?.data?.childServices?.map((item: any) => {
        return <p>{item.serviceName}</p>;
      })} */}
        {props?.data?.childServices?.map((itm: any, index: any) => (
          <div key={index} className="col-md-4  text-center ">
            <div className="col-md-12 mt-3 border_cards">
              <a
                style={{ textDecoration: "none", color: "gray" }}
                href={`/services/childservices/${itm.industryId}`}
              >
                <div className="col-md-12 ">
                  <img
                    className="img-fluid w-100"
                    // src={
                    //   itm?.serviceImage
                    //     ? itm?.serviceImage
                    //     : "assets/Images/girlb.png"
                    // }
                    src="/assets/images/girlb.png"
                    alt="image crashed"
                  />
                </div>
                <div className="py-3">
                  <p className="mb-0" key={index}>
                    {itm?.serviceName}
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default childservices;
