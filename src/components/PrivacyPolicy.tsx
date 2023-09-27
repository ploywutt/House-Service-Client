import { useTranslation } from "react-i18next";

function Policy() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <div
        className="pb-4"
        dangerouslySetInnerHTML={{ __html: t("policy.policy_header") }}
      ></div>
      <div
        className="pb-2"
        dangerouslySetInnerHTML={{ __html: t("policy.policy_collect") }}
      ></div>
      <div
        className="pb-4"
        dangerouslySetInnerHTML={{ __html: t("policy.policy_collect_details") }}
      ></div>
      <div
        className="pb-2"
        dangerouslySetInnerHTML={{ __html: t("policy.policy_security") }}
      ></div>
      <div className="pb-4">{t("policy.policy_security_details")}</div>
      <div
        className="pb-2"
        dangerouslySetInnerHTML={{ __html: t("policy.policy_choice") }}
      ></div>
      <div>{t("policy.policy_choice_details")}</div>
    </div>
  );
}

export default Policy;
