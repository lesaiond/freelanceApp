// import { useQuery } from 'react-query';

// export const fetchCompanies = async (page: number) => {
//   const response = await fetch(`https://www.themuse.com/api/public/companies?page=${page}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch companies');
//   }
//   console.log(response);
  
//   return response.json();
// };

// export const useCompanies = (page: number) => {
//   return useQuery(['companies', page], () => fetchCompanies(page));
// };
