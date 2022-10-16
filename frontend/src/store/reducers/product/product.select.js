import { createSelector } from 'reselect';

const selectProductReducer = (state) => state.productList;

export const selectProducts = createSelector(
    [selectProductReducer],
    (productSlice) => productSlice.products
);

export const selectIsLoading = createSelector(
    [selectProductReducer],
    (productSlice) => productSlice.isLoading
);

export const selectIsError = createSelector(
    [selectProductReducer],
    (productSlice) => productSlice.error
);