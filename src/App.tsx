import React from 'react';
import { VideoProvider} from "./components/context/Video";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <VideoProvider>
      <Wrapper />
    </VideoProvider>
  );
}

export default App;
