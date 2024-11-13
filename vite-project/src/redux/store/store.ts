import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "../slices/companySlice";
import branchReducer from "../slices/branchSlice"
import allergenSlice from "../slices/allergenSlice"
import categorySlice from "../slices/categorySlice"

export const store = configureStore({
  reducer: {
    company: companyReducer,
    branch: branchReducer,
    allergen: allergenSlice,
    category: categorySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
