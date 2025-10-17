import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Skeleton, Stack, Typography, useTheme } from "@mui/material";
import useRateStore from "../store";

type Props = {
  rate: number | undefined;
  change: number | undefined;
};

const Rate = ({ rate, change }: Props) => {
  const theme = useTheme();
  const { from, to } = useRateStore();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ p: 2, borderRadius: 3, bgcolor: theme.palette.grey[200] }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <MonetizationOnIcon color="primary" fontSize="large" />
        <Typography variant="h5">
          {from}/{to}
        </Typography>
      </Stack>
      {rate ? (
        <Stack>
          <Typography variant="h6">{rate}</Typography>
          <Typography
            color={change && change > 0 ? "green" : "red"}
            variant="overline"
          >
            {change}%
          </Typography>
        </Stack>
      ) : (
        <Stack>
          <Skeleton width={75} />
          <Skeleton width={75} />
        </Stack>
      )}
    </Stack>
  );
};

export default Rate;
