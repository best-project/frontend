type FormInputProps = {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  successMessage?: string;
};

export default FormInputProps;
