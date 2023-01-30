import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/usersSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {albumsApi} from "./apis/albumsApi";
import {photosApi} from "./apis/photosApi";

export const store = configureStore({
   reducer: {
       users: usersReducer,
       [albumsApi.reducerPath]: albumsApi.reducer,
       [photosApi.reducerPath]: photosApi.reducer,
   },
    middleware: (getDefaultMiddleware) => {
       return getDefaultMiddleware().concat(albumsApi.middleware).concat(photosApi.middleware);
    }
});

setupListeners(store.dispatch);

export * from "./thunks/getUsers";
export * from "./thunks/postUser";
export * from "./thunks/deleteUser";
export {useGetAlbumsQuery, usePostAlbumMutation, useDeleteAlbumMutation} from "./apis/albumsApi";
export {useGetPhotosQuery, usePostPhotoMutation, useDeletePhotoMutation} from "./apis/photosApi";
