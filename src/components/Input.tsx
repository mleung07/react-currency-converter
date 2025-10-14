import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { Box, IconButton, Stack, useTheme } from "@mui/material";
import useRateStore from "../store";
import ComboBox from "./ComboBox";

const Input = () => {
  const theme = useTheme();
  const { from, to, setFrom, setTo, swap } = useRateStore();

  return (
    <Box sx={{ p: 2, borderRadius: 3, bgcolor: theme.palette.grey[200] }}>
      <Stack direction="row" gap={2}>
        <Box textAlign="left">
          From <ComboBox value={from} onChange={setFrom} />
        </Box>
        <Box>
          <IconButton sx={{ bgcolor: "white", boxShadow: 4 }}>
            <SwapHorizIcon onClick={swap} />
          </IconButton>
        </Box>
        <Box textAlign="left">
          To <ComboBox value={to} onChange={setTo} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Input;
