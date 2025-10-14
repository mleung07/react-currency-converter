import { Autocomplete, TextField } from "@mui/material";
import currencies from "../utils/currencies";

type Props = {
  value: string;
  onChange: (arg0: string) => void;
};

const ComboBox = ({ value, onChange }: Props) => {
  return (
    <Autocomplete
      disablePortal
      size="small"
      options={currencies}
      sx={{ width: 300 }}
      value={value}
      onChange={(_, newValue) => newValue && onChange(newValue)}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default ComboBox;
