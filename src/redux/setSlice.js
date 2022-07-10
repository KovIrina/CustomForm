import {createSlice} from '@reduxjs/toolkit';

export const changeSetting = createSlice({
    name: 'setting',
    initialState: {
        value0: 'false',
        value1: 'false',
        value2: 'false',
        value3: 'false',
        value4: 'false',
        value5: 'false',
        value6: 'false',
        value7: 'false',
        value8: 'false',
        value9: 'false',
        value10: 'false',
        timeValue1: 'instantly',
        timeValue2: 'instantly',
        timeValue3: 'instantly',
    },

    reducers: {
        newSetting: (state , action) => {
            return  {...state, ...action.payload}
        },
        newTimeValue: (state, action) => {
            return  {...state, ...action.payload}
        }
    }})

export  const {newSetting, newTimeValue, newAdvertising} = changeSetting.actions;
export const selectSetting = (state) => state.setting
export default changeSetting.reducer
