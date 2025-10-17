import { useQuery } from "@tanstack/react-query";

const baseUrl = "https://api.frankfurter.dev/v1";

// TODO: get a more accurate date as data is updated around 4 PM UTC
const getYesterdayUTC = () => {
  const now = new Date();
  // Subtract one day (in milliseconds)
  now.setUTCDate(now.getUTCDate() - 2);
  // Extract components in UTC
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  const day = String(now.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getLatest = async (from: string, to: string) => {
  const response = await fetch(`${baseUrl}/latest?base=${from}&symbols=${to}`);
  return await response.json();
};

const getYtd = async (from: string, to: string) => {
  const response = await fetch(
    `${baseUrl}/${getYesterdayUTC()}?base=${from}&symbols=${to}`
  );
  return await response.json();
};

const useLatestRate = (from: string, to: string) => {
  return useQuery({
    queryKey: ["latest-rates", `${from}-${to}`],
    queryFn: () => getLatest(from, to),
    staleTime: Infinity, // skip network call on cache hit
  });
};

const useYtdRate = (from: string, to: string) => {
  return useQuery({
    queryKey: ["ytd-rates", `${from}-${to}`],
    queryFn: () => getYtd(from, to),
    staleTime: Infinity, // skip call when cache hit
  });
};

export { useLatestRate, useYtdRate };
