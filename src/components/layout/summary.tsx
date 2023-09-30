import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const { t } = useTranslation();

interface SummaryProps {
  productList: string[];
  date: string;
  time: string;
  location: string;
  totalAmount: number;
  promotionCode: string;
}

const Summary = ({
  productList,
  date,
  time,
  location,
  totalAmount,
  promotionCode,
}: SummaryProps) => {
  const [formattedProductList, setFormattedProductList] = useState([]);

  // useEffect(() => {

  //   const formattedList = productList.map((product) => <li key={product}>{product}</li>);
  //   setFormattedProductList(formattedList);
  // }, [productList]);

  return (
    <div className="w-[349px] h-fit pl-6 pr-[21px] pt-4 pb-7 bg-white rounded-lg border border-zinc-300 flex-col justify-start items-start gap-[18px] inline-flex ml-[36px] ">
      <h2>{t("summary_page.summary")}</h2>
      <table>
        <tbody className="w-[304px] h-[282px] flex-col justify-start items-start gap-6 inline-flex">
          <tr className="flex flex-col">
            <td>{t("summary_page.summary_orders")}</td>
            <td>{formattedProductList}</td>
          </tr>
          <div className="w-[301px] h-[0px] border border-gray-300" />
          <tr className="w-[304px] h-[21px] justify-between items-start inline-flex">
            <td>{t("summary_page.summary_day")}</td>
            <td>{date}</td>
          </tr>
          <tr className="w-[304px] h-[21px] justify-between items-start inline-flex">
            <td>{t("summary_page.summary_time")}</td>
            <td>{time}</td>
          </tr>
          <tr className="w-[304px] h-[21px] justify-between items-start inline-flex">
            <td>{t("summary_page.summary_location")}</td>
            <td>{location}</td>
          </tr>
          <div className=" w-[301px] h-[0px] border border-gray-300 " />
          <tr className="w-[304px] h-[21px] justify-between items-start inline-flex">
            <td>Promotion Code</td>
            <td>{promotionCode}</td>
          </tr>
          <tr className="w-[304px] h-[21px] justify-between items-start inline-flex">
            <td>{t("summary_page.summary_finale")}</td>
            <td>{totalAmount} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
