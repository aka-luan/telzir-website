export interface FormState {
  formData: {
    [k: string]: string;
  }
  formStyles: {
    [k: string]: string | number;
  }
  tarifaStyles: {
    [k: string]: string | number;
  }
  isForm: boolean;  
}

export interface Constants {
  tarifas: {
    [k: string]: number;
  }  
}

export interface DashboardState {
  leftStyles: {
    [k: string]: string | number;
  }
  rightStyles: {
    [k: string]: string | number;
  }

  isForm: boolean;  
}