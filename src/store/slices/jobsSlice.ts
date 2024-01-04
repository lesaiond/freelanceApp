// jobsSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Job {
  id: number;
  title: string;
  // Добавьте другие свойства вакансии, если они есть
}

export interface JobsState {
  value: number;
  jobList: Job[];
}

const initialState: JobsState = {
  value: 0,
  jobList: [],
};

interface FetchJobsParams {
  page?: number;
  descending?: boolean;
  company?: string;
  category?: string;
  level?: string;
  location?: string;
}

export const fetchJobList = createAsyncThunk('jobs/fetchJobList', async (params: FetchJobsParams) => {
  const { page, descending, company, category, level, location } = params;

  const queryParams: FetchJobsParams = {
    page,
    descending,
    company,
    category,
    level,
    location,
  };
  const filteredParams = Object.fromEntries(
    Object.entries(queryParams).filter(([_, value]) => value !== undefined)
  );

  try {
    const queryString = new URLSearchParams(filteredParams).toString();

    const response = await fetch(
      `https://www.themuse.com/api/public/jobs${queryString ? `?${queryString}` : ''}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    const data = await response.json();
    
    return data.results as Job[];
  } catch (error: any) {
    console.error('Error fetching job list:', error.message);
    throw error; // Rethrow the error for higher-level error handling
  }
});

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobList.fulfilled, (state, action) => {
      state.jobList = action.payload;
    })
    
  },
});

export const { increment, decrement, incrementByAmount } = jobsSlice.actions;

export default jobsSlice.reducer;
