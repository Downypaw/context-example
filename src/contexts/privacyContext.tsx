import { createContext } from "react";

export const PrivacyAgreementContext = createContext({
  isAgree: false,
  toggleAgreement: () => {},
});
