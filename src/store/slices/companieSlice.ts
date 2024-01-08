// companiesSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Company {
  id: number;
  name: string;
  // Add other company properties if available
}

interface CompaniesState {
  companyList: Company[];
}

const initialState: CompaniesState = {
  companyList: [],
};

interface FetchCompaniesParams {
  page: number;
  descending: boolean;
  industry?: string;
  size?: string;
  location?: string;
}

export const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async (params: FetchCompaniesParams) => {
    const { page, descending, industry, size, location } = params;

    try {
      const response = await fetch(
        `https://www.themuse.com/api/public/companies?page=${page}&descending=${descending}${industry ? `&industry=${industry}` : ''}${size ? `&size=${size}` : ''}${location ? `&location=${location}` : ''}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      console.log('Companies API Response:', data);

      return data.results as Company[];
    } catch (error: any) {
      console.error('Error fetching companies:', error.message);
      throw error;
    }
  }
);

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.companyList = action.payload;
    });
  },
});

export default companiesSlice.reducer;
