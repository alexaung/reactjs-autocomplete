import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from "axios"
import { Journey, SearchCriteria } from '../types'
import constants from "../constants";
import Moment from "moment";

type InitialState = {
    loading: boolean
    journeys: Journey[]
    criteria: SearchCriteria | null
    error: string
}

const initialState: InitialState = {
    loading: false,
    journeys: [],
    criteria: null,
    error: '',
};

type Respone = {
    journeys: Journey[]
    criteria: SearchCriteria | null
}

// generates pending, fulfilled and rejected action types
export const fetchJourneys = createAsyncThunk("journey/fetchJourneys", async (criteria: SearchCriteria) => {
    const response = await axios.get(`${constants.api_server}/journeys?from=${criteria.from}&to=${criteria.to}&departure=${Moment(criteria.departure).unix()}`);
    return {journeys: response.data.journeys, criteria:criteria }
});

const journeySlice = createSlice({
    name: "journey",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchJourneys.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchJourneys.fulfilled, (state, action: PayloadAction<Respone>) => {
            console.log(action.payload)
            state.loading = false
            state.journeys = action.payload.journeys
            state.criteria = action.payload.criteria
            state.error = ''
        })
        builder.addCase(fetchJourneys.rejected, (state, action) => {
            state.loading = false,
                state.journeys = [],
                state.error = action.error.message || 'Someting went wrong'
        })
    }
});

export default journeySlice.reducer