import { useQuery } from "react-query";

const fetchServicesData = async () => {
  const response = await fetch(
    "https://golden-hornet.onrender.com/api/services"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export const useServicesData = () => {
  return useQuery("servicesData", fetchServicesData, {
    staleTime: 300000, // re-fetch every 5 minutes
    cacheTime: 300000, // cache for 5 minutes
  });
};
