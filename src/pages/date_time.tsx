// Done By Abdul Rehman

import React, { useState, useEffect, useMemo } from "react";
import {
  Calendar,
  DayValue,
} from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import axios from "axios";
import styles from "../styles/date_time.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
var CryptoJS = require("crypto-js");

const DateTime = () => {
  const router = useRouter();
  const [providerIdList, setProviderIdList] = useState<number[]>([]);
  const [date, setDate] = useState<DayValue>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);

  const data = router.query && router.query.data ? router.query.data : null;

  useEffect(() => {
    const getProviderIdList = async () => {
      if (typeof data === "string") {
        var bytes = CryptoJS.AES.decrypt(data, "selteq");
        const object = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        try {
          setIsLoading(true);
          const response = await axios.get(
            `http://172.187.153.193:8097/api/Provider/GetProviders?serviceId=${9}&latitude=${
              object?.latitude
            }&longitude=${object?.longitude}&radius=${object?.radius}`
          );
          const responses = await response.data;
          setProviderIdList([]);
          setProviderIdList(
            responses.result.providers.map(
              (res: { providerId: any }) => res.providerId
            )
          );
        } catch (e) {
          console.log(e);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.log("Invalid data");
      }
    };
    getProviderIdList();
  }, [data]);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        setIsLoading(true);
        const result = await axios.post(
          "http://172.187.153.193:8082/post/slots",
          {
            date: `${date?.year}-${date?.month
              .toString()
              .padStart(2, "0")}-${date?.day.toString().padStart(2, "0")}`,
            providerId: providerIdList,
            slotDuration: 30,
          }
        );
        setList(result.data.result.providerList ?? []);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    sendRequest();
  }, [providerIdList, date]);

  const monthName = (month: number) => {
    switch (month) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      default:
        return "Dec";
    }
  };
  const month = monthName(date?.month ?? 1);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loading2}>
          <Image
            src="../assets/appointment/loaderr.gif"
            alt="loading gif"
            className={styles.loader_width}
            width={1349}
            height={700}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-md-5 my-3">
        <div className={`mx-md-5 mx-sm-2 ${styles.content_box}`}>
          <div className="d-flex justify-content-start align-item-center">
            <div>
              <span className="fa fa-angle-left mx-2"></span>
            </div>
            <div>
              <p>Back</p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-start align-item-between">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Keyboard-anykey.jpg"
                alt="nothing"
                width={140}
                height={140}
                className="rounded-1"
              />
              <div
                className={`d-flex flex-column justify-content-center align-item-between mx-4 ${styles.product_detail}`}
              >
                <h4>Sunspots Freckle Removal</h4>
                <p>
                  <span className="fa fa-clock-o"></span> 40 Minutes
                </p>
                <h4>£72</h4>
              </div>
            </div>
          </div>
          <div className={styles.horizontal_bar}></div>
          <div>
            <h5 className={styles.choose_appointment}>Choose Appointment</h5>
            <h6 className={styles.datee}>
              <span className="fa fa-calendar-o"></span>
              {/* {"  " + date.toDateString().slice(4, 15)} */}
              {` ${month} ${date?.day} ${date?.year}`}
            </h6>
            <div className="row">
              <div className="col-md-5">
                <Calendar
                  value={date}
                  onChange={setDate}
                  colorPrimary="#EC1E27" // added this
                  colorPrimaryLight="##EC1E27"
                  calendarClassName={styles.responsive_calendar}
                  shouldHighlightWeekends
                />
              </div>
              <div className="col-md-7 d-flex flex-wrap">
                {list.length === 0 ? (
                  <div>
                    <h1>No Data Found</h1>
                  </div>
                ) : (
                  list.map((item, index) => (
                    <div
                      key={index}
                      className={`${styles.time_box} mb-2 ${styles.margin_right}`}
                    >
                      {item["from"]} - {item["endTo"]}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" className={`btn ${styles.red_button}`}>
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
