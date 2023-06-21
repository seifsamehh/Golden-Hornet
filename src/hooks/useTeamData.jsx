import { useQuery } from "react-query";

const fetchTeamData = async () => {
  const response = await fetch("https://golden-hornet.onrender.com/api/team");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export const useTeamData = () => {
  return useQuery("teamData", fetchTeamData, {
    staleTime: 300000, // re-fetch every 5 minutes
    cacheTime: 300000, // cache for 5 minutes
  });
};
