import HeadImage from "@/components/layout/headimage";
// import Selltag from "../icon/sell_tag.png";

function Servicedetail() {
  return (
    <>
      <section>
        <HeadImage />
        <div className="w-96 h-96  px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 flex-col justify-start items-start gap-5 inline-flex">
          <div className="text-gray-500 text-xl font-normal leading-loose">
            เลือกรายการบริการล้างแอร์
          </div>
        </div>
      </section>
      <section>
        <div className="w-80 h-36 px-6 pt-4 pb-10 bg-white rounded-lg border border-zinc-300 justify-center items-center inline-flex">
          <div className="text-gray-500 text-xl font-normal leading-loose">
            สรุปรายการ
          </div>
        </div>
      </section>
    </>
  );
}

export default Servicedetail;
