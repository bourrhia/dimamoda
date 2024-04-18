"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const MyStoreProvider = ({ children, ...rest }) => {
  const ShowLoading = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "9999",
        }}
      >
        <CircularProgress size={40} />
      </Box>
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={<ShowLoading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default MyStoreProvider;
