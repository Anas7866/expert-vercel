import React, { useEffect, useState } from "react";

// import img1 from "../assets/Images/img2.png";
// import { img1 } from "@/assets/Images";
// import img1 from "./../../src/assets/Images/img3.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineRight } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";
var CryptoJS = require("crypto-js");

interface Address {
  id: number;
  line1: string;
  townCity: string;
  addressnotes: string;
}

interface ApiResponse {
  result: {
    addresses: Address[];
  };
}

const Manageaddress = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const router = useRouter();
  let handleDelete = async (id: any) => {
    setSelectedIndex(-1);
    try {
      await fetch(
        "https://microexpertaddressapi-preprod.findanexpert.net/address_svc/pv/UserAddress/removeAddress",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJJU1NVRVJfRVhQRVJUIiwiYXVkaWVuY2UiOiJFWFBFUlQiLCJleHBpcmVzIjoiMjAyMy0wMy0yOVQxMDo0MjoyNi43NTZaIiwiY2xhaW1zIjoiZXlKbWIyOGlPaUp6YjIxbExXWnZieTEwWlhOMGFXNW5MV05zWVdsdElpd2libUZ0WlNJNkluTm9ZV2dnYTJoaGJHbGtJaXdpWlcxaGFXd2lPaUp6YUdGb2FXUWdZV1p5YVdScGN5SjkiLCJpc3MiOiJJU1NVRVJfRVhQRVJUIiwiYXVkIjoiRVhQRVJUIiwic3ViIjoiRVhQRVJUIiwiaWF0IjoxNjgwMDg2NDg2LCJleHAiOjE2ODAxNzI4ODZ9.kEChiH96sthLMHcxpa3WN-oBhLAm9UIiRWLHKv0Vaj1sKffouJy6uXo5S-uQGeKr2NYYlWgqiaXEaecJc0-uoFnyGWv2la8b4A61GFMEeqW2FdY5MxA1rwVMdcDa62WDRSDcSfc22R4nyTUsCKZWJlfegfogF1bivKoDkw3dGNMqHricsLE8STV4HcLcL7wAcPoRpTkFb9xishDZCra1ff2J4ciDyFXWy3_pXYo44XtJ4rotlynLfM4aiWHnE062Io2xlhTuvZAFfy0fb00CxKU5fvBV8r1FMQvKkcjNFgP_O3X131yH2E8M1ycDKoJRel54F4ThO846x-dGs--e7Q`,
          },
          body: JSON.stringify({
            id: id,
            modifiedBy: 0,
          }),
        }
      );
      setAddresses(addresses.filter((e) => e.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (address: any) => {
    router.push({
      pathname: "/update_address_page",
      query: { state: JSON.stringify(address) },
    });
  };

  // const getProviderIdList = async (object:any) => {
  //   const response = await fetch(`http://172.187.153.193:8097/api/Provider/GetProviders?serviceId=${9}&latitude=${object?.latitude}&longitude=${object?.longitude}&radius=${object?.radius}`);
  //   console.log(await response.json());
  //   router.push(`/date_time`, null , { shallow: true, query: {} });
  // }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://microexpertaddressapi-preprod.findanexpert.net/address_svc/pv/UserAddress/getAddress"
        );
        const data: ApiResponse = await response.json();
        setAddresses(data.result.addresses);
      } catch (e) {
        console.log("ERROR::", e);
      }
    }
    fetchData();
  }, [setAddresses]);
  return (
    <>
      <div className="container pt-4">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3">
            <div className="card card-border">side bar</div>
          </div>
          <div className="col-md-9">
            <div className="card p-3">
              <div className="row d-flex justify-content-between">
                <div className="col-md-9">
                  <h4 className="manage-address">Manage Addresses</h4>
                  <p className="manage-address-detail">
                    Don&apos;t worry, your information is private and we will
                    not share this info with anyone outside Expert!
                  </p>
                  <Link href="/map" className="Learn-more mt-5">
                    Create New Address
                    <AiOutlineRight />
                  </Link>
                </div>
                <div className="col-md-3">
                  {/* <img
                    src="../asstes/Images/img3.png"
                    height={110}
                    width={180}
                    alt="create account"
                    className="rounded-circle mx-auto d-block"
                  /> */}
                </div>
              </div>
            </div>
            <div className="card p-3 mt-4">
              {addresses.length === 0 ? (
                <h1>No Addresses Found</h1>
              ) : (
                addresses.map((address, index) => {
                  return (
                    <div key={index} style={{ cursor: "default" }}>
                      <div
                        className="d-flex bd-highlight"
                        style={{ cursor: "pointer" }}
                        // onClick={()=>getProviderIdList(address)}
                      >
                        <Link
                          href={{
                            pathname: "/date_time",
                            query: {
                              data: CryptoJS.AES.encrypt(
                                JSON.stringify(address),
                                "selteq"
                              ).toString(),
                            },
                          }}
                        >
                          <div className="p-2 flex-grow-1 bd-highlight">
                            <span style={{ fontSize: "20px" }}>
                              <BiBuildings />
                            </span>
                            <span className="address-info">
                              {address.line1}
                            </span>
                            <p className="Office">
                              {address.townCity},{address.addressnotes}
                            </p>
                          </div>
                        </Link>

                        <div className="p-2 bd-highlight">
                          <div className="badge">New Added</div>
                        </div>
                        <div
                          className={`dropdown ${
                            selectedIndex === index ? "show" : ""
                          }`}
                        >
                          <span
                            style={{
                              fontSize: "",
                              color: "#ccd2d8",
                              cursor: "pointer",
                              marginTop: "16px",
                              marginLeft: "-5px",
                              marginRight: "22px",
                            }}
                            onClick={() =>
                              selectedIndex === index && selectedIndex >= 0
                                ? setSelectedIndex(-1)
                                : setSelectedIndex(index)
                            }
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <BsThreeDotsVertical />
                          </span>
                          <div
                            className={`dropdown-menu ${
                              selectedIndex === index ? "show" : ""
                            }`}
                            aria-labelledby="dropdownMenuButton"
                          >
                            <div className="">
                              <div
                                className="option"
                                onClick={(e) => handleEdit(address)}
                              >
                                <i className="fas fa-edit"></i>
                                <span>Edit</span>
                              </div>
                              <div
                                onClick={(e) => handleDelete(address.id)}
                                className="option"
                              >
                                <i className="fas fa-trash-alt"></i>
                                <span>Delete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="icon-text">
                        <span
                          style={{
                            marginRight: "10px",
                            marginLeft: "8px",
                            marginTop: "15px",
                            color: "#CCD2D8",
                          }}
                        >
                          <AiOutlineInfoCircle />
                        </span>
                        <span>{address.addressnotes}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <hr className="line-color" />
            <hr className="line-color" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manageaddress;
