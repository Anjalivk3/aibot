import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { ThemeContext } from "../../Theme/ThemeContext";
import { useContext } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const listRef = useRef(null);
  const [chatId, setChatId] = useState(1);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const { chat, setChat } = useOutletContext();
  const { mode } = useContext(ThemeContext);

  // GENERATING AI RESPONSE
 
  return (
    <Stack
      height={"100vh"}
      justifyContent={"space-between"}
      sx={{
        "@media (max-width:767px)": {
          background:
            mode == "light" ? "linear-gradient(#F9FAFA 60%, #EDE4FF)" : "",
        },
      }}
    >
      <Navbar />

   
    </Stack>
  );
}

export default Home;