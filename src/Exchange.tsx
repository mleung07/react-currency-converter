import { Divider, Paper, Typography } from "@mui/material";
import { useMemo } from "react";
import Input from "./components/Input";
import Rate from "./components/Rate";
import useRateStore from "./store";
import { useLatestRate, useYtdRate } from "./utils/api";

const Exchange = () => {
  const { from, to } = useRateStore();
  const { data: latestData } = useLatestRate(from, to);
  const { data: ytdData } = useYtdRate(from, to);
  const [rate, change] = useMemo(() => {
    const latestRate = latestData?.rates?.[to];
    const ytdRate = ytdData?.rates?.[to];
    return [
      latestRate,
      Math.round(((latestRate - ytdRate) / ytdRate) * 10000) / 100,
    ];
  }, [latestData?.rates, to, ytdData?.rates]);

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4">Currency Exchange Rates</Typography>
      <Divider sx={{ my: 3 }} />
      <Rate rate={rate} change={change} />
      <Divider sx={{ my: 3 }} />
      <Input />
    </Paper>
  );
};

export default Exchange;
