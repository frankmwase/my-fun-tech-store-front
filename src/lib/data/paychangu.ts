"use client"
import { MobileMoneyOperatorsResponse } from "types/payment"

export const listMobileMoneyPaymentOptions = async (): Promise<MobileMoneyOperatorsResponse | null> => {

  try {
    const response = await fetch('https://api.paychangu.com/mobile-money', {
      method: 'GET',
      headers: { accept: 'application/json' },
      cache: 'force-cache',
    });
    
    const data: MobileMoneyOperatorsResponse = await response.json();
    

    return data;
  } catch {
    return null;
  }
};
