import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const getPersistedAuth = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const raw = window.localStorage.getItem("bissa_auth");
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
};

const persistedAuth = getPersistedAuth();

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: persistedAuth
    ? {
        auth: persistedAuth,
      }
    : undefined,
});

if (typeof window !== "undefined") {
  store.subscribe(() => {
    window.localStorage.setItem("bissa_auth", JSON.stringify(store.getState().auth));
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
