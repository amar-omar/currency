export interface ICurrency {
  name: string;
  code: string;
  icon_url: string;
  checked?: boolean;
  value?: number;
}

export interface ICodesResponse {
  conversion_rates: {
    [code: string]: number;
  };
}
