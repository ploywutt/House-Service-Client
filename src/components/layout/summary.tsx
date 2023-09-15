import React, { useState, useEffect } from 'react';

const Summary = ({ productList, date, time, location, totalAmount, promotionCode }) => {
  const [formattedProductList, setFormattedProductList] = useState([]);

  // useEffect(() => {
   
  //   const formattedList = productList.map((product) => <li key={product}>{product}</li>);
  //   setFormattedProductList(formattedList);
  // }, [productList]);

  return (
    <div className="w-[349px] h-fit pl-6 pr-[21px] pt-4 pb-7 bg-white rounded-lg border border-zinc-300 flex-col justify-start items-start gap-[18px] inline-flex ml-[36px] ">
      <h2>สรุปรายการ</h2>
      <table>
  
        <tbody className="w-[304px] h-[282px] flex-col justify-start items-start gap-6 inline-flex">
          <tr className='flex flex-col'>
            <td>รายการสินค้า</td>
            <td>{formattedProductList}</td>
          </tr>
          <div className="w-[301px] h-[0px] border border-gray-300" />
          <tr className="w-[304px] h-[21px] justify-between items-start inline-flex">
            <td>วันที่</td>
            <td>{date}</td>
          </tr>
          <tr className="w-[304px] h-[21px] justify-between items-start inline-flex">
            <td>เวลา</td>
            <td>{time}</td>
          </tr>
          <tr className="w-[304px] h-[21px] justify-between items-start inline-flex">
            <td>สถานที่</td>
            <td>{location}</td>
          </tr>
          <div className=' w-[301px] h-[0px] border border-gray-300 '/>
          <tr className="w-[304px] h-[21px] justify-between items-start inline-flex" >
            <td>Promotion Code</td>
            <td>{promotionCode}</td>
          </tr>
          <tr className="w-[304px] h-[21px] justify-between items-start inline-flex" >
            <td>ยอมรวม</td>
            <td>{totalAmount} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
