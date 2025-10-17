import { Autocomplete, TextField } from "@mui/material";
import { useMemo } from "react";
import currencies from "../utils/currencies";

type Props = {
  value: string;
  onChange: (arg0: string) => void;
};

const ComboBox = ({ value, onChange }: Props) => {
  const selectedCurrency = useMemo(() => {
    return currencies.find((currency) => currency.code === value) || null;
  }, [value]);

  return (
    <Autocomplete
      disablePortal
      size="small"
      options={currencies}
      getOptionLabel={(option) => `${option.code} - ${option.name}`}
      sx={{ width: 300 }}
      value={selectedCurrency}
      onChange={(_, newValue) => newValue && onChange(newValue.code)}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default ComboBox;
