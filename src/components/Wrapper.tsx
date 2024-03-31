import React from "react";
import {useVideoContext} from "./context/Video";
import {Box, CircularProgress} from "@mui/material";
import Filters from "./Filters";
import VideoList from "./VideoList";

const Wrapper: React.FC = () => {
  const { loading } = useVideoContext();

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh"   style={{ padding: '1rem' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <div style={{ padding: '1rem' }}>
      <Filters />
      <VideoList />
      </div>
    </>
  );
};

export default Wrapper