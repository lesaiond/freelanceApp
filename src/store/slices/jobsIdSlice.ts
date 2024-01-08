import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fastMapProps } from "../../components/JobDetails/JobDetails";

interface JobDetails {
  id: number;
  name: string;
  contents: string;
  type: string;
  publication_date: string;
  company: {
    id: number;
    short_name: string;
    name: string;
  };
  locations: {
    map(arg0: (data: fastMapProps) => string): import("react").ReactNode;
    name: string
  };
  categories: {
    map(arg0: (data: fastMapProps) => string): import("react").ReactNode;
    name: string;
  };
  levels: {
    map(arg0: (data: fastMapProps) => string): import("react").ReactNode;
    name: string;
    short_name: string;
  };
  tags: {
    map(arg0: (data: fastMapProps) => string): import("react").ReactNode;
    name: string;
    short_name: string;
  };
}

interface JobsIdState {
  selectedJobDetails: JobDetails | null;
}

const initialState: JobsIdState = {
  selectedJobDetails: null,
};

export const fetchJobDetails = createAsyncThunk(
  "jobsId/fetchJobDetails",
  async (id: number) => {
    try {
      console.log("in fetchJobDetails:", id);

      if (!id) {
        throw new Error("Invalid job ID");
      }

      const response = await fetch(
        `https://www.themuse.com/api/public/jobs/${id}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();

      return data as JobDetails;
    } catch (error: any) {
      console.error("Error fetching job details:", error.message);
      throw error;
    }
  }
);

export const jobsIdSlice = createSlice({
  name: "jobsId",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJobDetails.fulfilled, (state, action) => {
      state.selectedJobDetails = action.payload;
    });
  },
});

export default jobsIdSlice.reducer;
