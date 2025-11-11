export type MobileMoneyOperatorsResponse = {
  status: string;
  message: string;
  data: MobileMoneyOperator[];
};

export type MobileMoneyOperator = {
  id: number;
  name: string;
  ref_id: string;
  short_code: string;
  logo: string | null;
  supports_withdrawals: boolean;
  supported_country: {
    name: string;
    currency: string;
  };
};
