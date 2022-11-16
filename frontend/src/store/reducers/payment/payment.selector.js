import { createSelector } from 'reselect';

const paymentdetailreducer = (state) => state.paymentmethod;

export const paymentselected = createSelector(
    [paymentdetailreducer],
    (paymentSlice) => paymentSlice.paymentMethod
);