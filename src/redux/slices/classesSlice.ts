import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ScheduleItem {
  day: string;
  time: string;
}
interface Instructor {
  name: string;
  image: string;
}
export interface ClassItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  duration: string;
  intensity: string;
  level: string;
  description: string;
  longDescription: string;
  schedule: string;
  fullSchedule: ScheduleItem[];
  instructor: Instructor[];
}

interface ClassesState {
  items: ClassItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ClassesState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchClasses = createAsyncThunk("classes/fetch", async () => {
  const res = await fetch("https://gymfit-x.onrender.com/classes");
  if (!res.ok) {
    throw new Error("Failed to fetch classes");
  }
  return (await res.json()) as ClassItem[];
});

const classesSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default classesSlice.reducer;

export const selectClassBySlug = (
  state: { classes: ClassesState },
  slug: string
) => state.classes.items.find((cls) => cls.slug === slug);
