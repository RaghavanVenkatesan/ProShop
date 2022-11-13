import { createSelector } from 'reselect';

//if needed use it if not don't
const selectuserdetails = (state) => state.userDetails;

export const userdetails = createSelector(
    [selectuserdetails],
    (userslice) => userslice.user
) 