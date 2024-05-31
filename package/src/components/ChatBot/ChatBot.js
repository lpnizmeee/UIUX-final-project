import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import agentLogo from "../../assets/images/chatbot/agent.png";
import avatar from "../../assets/images/users/tht.jpg";
export default function ChatBot({ showChat, setShowChat }) {
  const [chatLog, setChatLog] = React.useState([]);
  const insertChat = async (message, isUser) => {
    setChatLog((prev) => [
      ...prev,
      { text: message, isUser: isUser, key: prev.length },
    ]);
  };
  const handleFabClick = () => {
    setShowChat(!showChat);
  };

  return (
    <Box>
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 5001,
        }}
        onClick={handleFabClick}
      >
        AI
      </Fab>
      {showChat && <ChatScreen chatLog={chatLog} insertChat={insertChat} />}
    </Box>
  );
}

// Assuming you have a ChatScreen component
function ChatScreen({ chatLog = [], insertChat }) {
  const bottomRef = React.useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.message.value) return;
    await insertChat(e.target.message.value, true);
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
    e.target.message.value = "";
    // set a timeout to simulate the AI response
    await insertChat(
      "Xin chào, tôi có thể giúp gì được cho bạn? Bạn có thể sử dụng các yêu cầu được gợi ý.",
      false
    );
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const defaultHandlerGenerator = (message, response) => {
    const handleChat = async (e) => {
      e.preventDefault();
      await insertChat(message, true);
      await bottomRef.current.scrollIntoView({ behavior: "smooth" });
      await insertChat(response, false);
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return handleChat;
  };
  React.useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  const chatResponsePairs = [
    {
      message: "What should I do today?",
      response:
        "You should probably complete the prerequisites research for the upcoming publication.",
    },
    {
      message: "Show me last week's summary",
      response:
        "Last week, you have: \n- Completed 7 tasks, average KPI achieved 80% \n- Got 1 new project \nKeep up the good work!",
    },
    {
      message: "What are the upcoming deadlines?",
      response:
        "Next week (from 3/6/2024 to 9/6/2024) you have the following deadlines (sorted by priority from high to low):\n- Complete service hours KPI in May \n- Prepare for scientific publication to achieve 80% research KPI",
    },
  ];
  // Your chat screen implementation
  return (
    <div
      style={{
        position: "fixed",
        bottom: "70px",
        right: "20px",
        width: "300px",
        height: "500px",
        backgroundColor: "white",
        border: "1px solid #4e4e4e",
        borderRadius: "30px 30px 0 30px",
        display: "flex",
        padding: "0 2% 2% 2%",
        marginRight: "2%",
        zIndex: 5000,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          gap: "1rem",
          height: "100%",
          width: "100%",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          onSubmit={handleSubmit}
        >
          <TextField name="message" label="Send a message" size="small" />
          <Button type="submit" variant="contained" color="primary">
            <SendIcon />
          </Button>
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "2px",
          }}
        >
          {chatResponsePairs.map((pair) => (
            <Button
              variant="outlined"
              size="small"
              onClick={defaultHandlerGenerator(pair.message, pair.response)}
            >
              {pair.message}
            </Button>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            overflowY: "auto",
            height: "100%",
          }}
        >
          {chatLog.map((chat) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                ...(chat.isUser
                  ? { flexDirection: "row-reverse" }
                  : { flexDirection: "row" }),
              }}
              key={chat.key}
            >
              <img
                src={chat.isUser ? avatar : agentLogo}
                alt="Avatar"
                style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  gap: "2px",
                  padding: "5%",
                  backgroundColor: chat.isUser ? "lightblue" : "white",
                  borderRadius: chat.isUser
                    ? "10px 0 10px 10px"
                    : "0 10px 10px 10px",
                  width: "50%%",
                  height: "fit-content",
                  marginTop: "8px",
                  ...(chat.isUser
                    ? { backgroundColor: "#1A97F5", color: "white" }
                    : { backgroundColor: "#A7E3F470", color: "black" }),
                }}
              >
                {chat.text.split("\n").map((line, index) => (
                  <Typography
                    key={index}
                    style={{ fontSize: "small", wordBreak: "normal" }}
                  >
                    {line}
                  </Typography>
                ))}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <Typography style={{ paddingTop: "5%" }}>AI Assistant</Typography>
      </div>
    </div>
  );
}
