import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Axios ile API isteğini gerçekleştiren asenkron bir thunk
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    try {
      const response = await axios.get("https://api.github.com/users/frkntopal/repos");
      return response.data;
    } catch (error) {
      throw new Error("GitHub projeleri getirilirken bir hata oluştu.");
    }
  }
);

// Redux slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0, // quantity alanını 0 olarak başlatıyoruz
    projects: [], // GitHub projelerini tutacak yeni bir alan ekledik
    status: "idle", // API isteği durumunu takip etmek için bir alan ekledik
    error: null, // Hata durumunu takip etmek için bir alan ekledik
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.projects = action.payload;
        state.quantity = action.payload.length; // fetch edilen projelerin sayısını quantity alanına atıyoruz
        console.log(state.projects)
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
