import { createSelector } from 'reselect';

const selectProductDetailReducer = (state) => state.productDetails;

export const selectProductDetails = createSelector(
    [selectProductDetailReducer],
    (productDetailSlice) => productDetailSlice.product
);

export const selectIsLoading = createSelector(
    [selectProductDetailReducer],
    (productDetailSlice) => productDetailSlice.isLoading
);

export const selectIsError = createSelector(
    [selectProductDetailReducer],
    (productDetailSlice) => productDetailSlice.error
);