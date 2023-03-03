import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const SignupUser = createAsyncThunk(
    "trackwidth/add",
    async (data) => {
      await axios.post("/api/signup", { data });
    }
  ); 