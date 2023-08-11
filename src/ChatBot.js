import React from "react";
import { Configuration, OpenAIApi } from "openai";
import { CircularProgress, Popover } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import r2d2 from "./r2d2.png";

export default function ChatBot() {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  delete configuration.baseOptions.headers["User-Agent"];
  const openai = new OpenAIApi(configuration);
  const [output, setOutput] = React.useState("The response will appear here");
  const [prompt, setPrompt] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleSend();
    }
  };
  const handleSend = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: process.env.REACT_APP_PRE_PROCESS_PROMPT + prompt,
        temperature: 0.5,
        max_tokens: 100,
      });
      setOutput(response.data.choices[0].text);
    } catch (err) {
      console.log(err);
      setOutput("Error");
    }
    setLoading(false);
  };
  return (
    <div className="chatbot">
      <div className="info" id={id} onClick={handleClick}>
        <FontAwesomeIcon icon={faQuestionCircle} />
      </div>
      <img src={r2d2} alt="bot" height={120} />
      <h1>Ask me a question</h1>
      <p style={{ color: "#5538fa" }}>Jacob AI using Chat-GPT</p>
      <div className="gpt">
        <input
          type="text"
          onChange={handlePrompt}
          onKeyDown={handleKeyDown}
          placeholder="Your Question"
        />
        <button onClick={handleSend}>
          <ion-icon name="send"></ion-icon>
        </button>
      </div>
      <div className="output">
        {loading ? <CircularProgress color="inherit" /> : output}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{sx: {backgroundColor: 'rgba(0,0,0,0.9)', maxWidth: '300px'}}}
      >
       <p style={{color: '#bebebe', padding: '15px'}}>Meet my virtual alter ego, the result of merging my identity with OpenAI's prowess. By channeling a wealth of personal information through the OpenAI API, I've harnessed the ability to have it answer your questions about me. Get ready to explore and enjoy insightful conversations about my life and interests!</p>
      </Popover>
    </div>
  );
}
