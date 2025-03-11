import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Createpage from "./pages/Createpage";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Box>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/create" element={<Createpage />} />
                </Routes>
            </Box>
        </>
    );
}

export default App;
