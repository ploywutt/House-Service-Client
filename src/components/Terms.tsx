import { useTranslation } from "react-i18next";

function Terms() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <div
        className="pb-4"
        dangerouslySetInnerHTML={{ __html: t("terms.terms_header") }}
      ></div>
      <div
        className="pb-2"
        dangerouslySetInnerHTML={{ __html: t("terms.terms_accept") }}
      ></div>
      <div className="pb-4">{t("terms.terms_accept_details")}</div>
      <div
        className="pb-2"
        dangerouslySetInnerHTML={{ __html: t("terms.terms_payment") }}
      ></div>
      <div className="pb-4">{t("terms.terms_payment_details")}</div>
      <div
        className="pb-2"
        dangerouslySetInnerHTML={{ __html: t("terms.terms_register") }}
      ></div>
      <div>{t("terms.terms_register_details")}</div>
    </div>
  );
}

export default Terms;
