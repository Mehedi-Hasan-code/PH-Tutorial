import { useState } from "react";

const useInputField = (defaultValue) => {
  const [fieldValue, setFieldValue] = useState(defaultValue);

  const handleFieldOnChange = (e) => setFieldValue(e.target.fieldValue);

  return [fieldValue, handleFieldOnChange];
};

export default useInputField;
