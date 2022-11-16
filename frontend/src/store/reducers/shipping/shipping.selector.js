import { createSelector } from 'reselect';

const shippingdetailreducer = (state) => state.shippingdetails;

export const selectaddress = createSelector(
    [shippingdetailreducer],
    (shippingSlice) => shippingSlice.shippingAddress
);