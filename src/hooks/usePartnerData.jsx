import { useQuery } from "react-query";

const fetchPartnerData = async () => {
  const response = await fetch(
    "https://golden-hornet.onrender.com/api/partners"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export const usePartnerData = () => {
  return useQuery("partnerData", fetchPartnerData, {
    staleTime: 300000, // re-fetch every 5 minutes
    cacheTime: 300000, // cache for 5 minutes
  });
};
