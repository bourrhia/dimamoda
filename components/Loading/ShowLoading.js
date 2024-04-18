import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function ShowLoading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //position: "fixed",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: "99999",
      }}
    >
      <CircularProgress size={40} />
    </Box>
  );
}
