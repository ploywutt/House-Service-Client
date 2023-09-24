import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import DayPicker from "./addressInput/DayPicker";
import TimePicker from "./addressInput/TimePicker";

import { useTranslation } from "react-i18next";

function ClientInput(props) {
  const { t } = useTranslation();
  console.log(props.selectedProvince);

  return (
    <div
      id="add-input"
      className="w-[735px] h-fit bg-white rounded-lg border border-zinc-300  p-5"
    >
      <h3 className="text-gray-700">
        {t("stepper_second_details.stepper_detail_header")}
      </h3>
      <div className="flex flex-col py-8">
        <div className="grid grid-cols-2 gap-4 gap-y-6">
          <div className="flex flex-col">
            <label htmlFor="calendar" className="py-0.5">
              {t("stepper_second_details.stepper_detail_day")}
              <span className="text-utility-red">*</span>
            </label>
            <DayPicker date={props.date} setDate={props.setDate} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="time" className="py-0.5">
              {t("stepper_second_details.stepper_detail_time")}
              <span className="text-utility-red">*</span>
            </label>
            <TimePicker
              hour={props.hour}
              minute={props.minute}
              handleHour={props.handleHour}
              handleMinute={props.handleMinute}
              clickHour={props.clickHour}
              clickMinute={props.clickMinute}
              selectedTime={props.selectedTime}
              setSelectedTime={props.setSelectedTime}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="py-0.5 ">
              {t("stepper_second_details.stepper_detail_location")}
              <span className="text-utility-red">*</span>
            </label>
            <Input
              type="text"
              id="address"
              name="address"
              placeholder={t(
                "stepper_second_details.stepper_detail_location_please"
              )}
              className="hover:bg-slate-100 placeholder:hover:text-slate-900"
              required
              onChange={(e) => props.setAddress(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="province" className="py-0.5">
              {t("stepper_second_details.stepper_detail_province")}
              <span className="text-utility-red">*</span>
            </label>
            <Select
              onValueChange={(event) => {
                props.setSelectedProvince(event);
              }}
            >
              {props.selectedProvince === "" ? (
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={t(
                      "stepper_second_details.stepper_detail_province_please"
                    )}
                  />
                </SelectTrigger>
              ) : (
                <SelectTrigger className="w-full text-slate-950">
                  <SelectValue
                    placeholder={t(
                      "stepper_second_details.stepper_detail_province_please"
                    )}
                  />
                </SelectTrigger>
              )}
              <SelectContent className="h-96">
                {props.provinces.map(
                  (item: { name_th: string }, index: number) => {
                    return (
                      <SelectItem key={index} value={item.name_th}>
                        {item.name_th}
                      </SelectItem>
                    );
                  }
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="py-0.5">
              {t("stepper_second_details.stepper_detail_district")}
              <span className="text-utility-red">*</span>
            </label>
            <Select onValueChange={(event) => props.setSelectedAmphure(event)}>
              {props.selectedProvince === "" ? (
                <SelectTrigger className="w-full" disabled>
                  <SelectValue
                    placeholder={t(
                      "stepper_second_details.stepper_detail_select_district"
                    )}
                  />
                </SelectTrigger>
              ) : props.selectedAmphure === "" ? (
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={t(
                      "stepper_second_details.stepper_detail_select_district"
                    )}
                  />
                </SelectTrigger>
              ) : (
                <SelectTrigger className="w-full text-slate-950">
                  <SelectValue
                    placeholder={t(
                      "stepper_second_details.stepper_detail_select_district"
                    )}
                  />
                </SelectTrigger>
              )}

              <SelectContent className="h-96">
                {props.amphures.map(
                  (item: { name_th: string }, index: number) => {
                    return (
                      <SelectItem key={index} value={item.name_th}>
                        {item.name_th}
                      </SelectItem>
                    );
                  }
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="address2" className="py-0.5">
              {t("stepper_second_details.stepper_detail_town")}
              <span className="text-utility-red">*</span>
            </label>

            <Select onValueChange={(event) => props.setSelectedTambon(event)}>
              {props.selectedAmphure === "" ? (
                <SelectTrigger className="w-full" disabled>
                  <SelectValue
                    placeholder={t(
                      "stepper_second_details.stepper_detail_select_town"
                    )}
                  />
                </SelectTrigger>
              ) : props.selectedTambon === "" ? (
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={t(
                      "stepper_second_details.stepper_detail_select_town"
                    )}
                  />
                </SelectTrigger>
              ) : (
                <SelectTrigger className="w-full text-slate-950">
                  <SelectValue
                    placeholder={t(
                      "stepper_second_details.stepper_detail_select_town"
                    )}
                  />
                </SelectTrigger>
              )}

              <SelectContent className="h-96">
                {props.tambons.map(
                  (item: { name_th: string }, index: number) => {
                    return (
                      <SelectItem key={index} value={item.name_th}>
                        {item.name_th}
                      </SelectItem>
                    );
                  }
                )}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col py-6">
          <label htmlFor="other" className="py-0.5">
            {t("stepper_second_details.stepper_detail_comments")}
          </label>
          <textarea
            id="other"
            name="other"
            rows={3}
            // cols="20"
            placeholder={t(
              "stepper_second_details.stepper_detail_comments_area"
            )}
            className="px-4 py-2.5 border rounded-lg border-gray-300 placeholder:text-gray-700 text-base focus:outline-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default ClientInput;
