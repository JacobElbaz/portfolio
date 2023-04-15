import React from 'react'
import { Configuration, OpenAIApi } from 'openai';
import { CircularProgress, LinearProgress } from '@mui/material';

export default function ChatBot() {
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    })
    const openai = new OpenAIApi(configuration)
    const [output, setOutput] = React.useState('')
    const [prompt, setPrompt] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const handlePrompt = (e) => {
        setPrompt(e.target.value)
    }
    const handleKeyDown = (e) => {
        if (e.key == 'Enter'){
            handleSend();
        }
    }
    const handleSend = async () => {
        setLoading(true)
        try {
            const response = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: process.env.REACT_APP_PRE_PROCESS_PROMPT + prompt,
                temperature: 0.5,
                max_tokens: 100,
            })
            setOutput(response.data.choices[0].text)
        } catch (err) {
            console.log(err)
            console.log(process.env.REACT_APP_OPENAI_API_KEY);
            setOutput('Error')
        }
        setLoading(false);
    }
    return (
        <div>
            <h1>Ask me a question</h1>
            <h4>Jacob AI using Chat-GPT</h4>
            <input type='text' onChange={handlePrompt} className='contact' onKeyDown={handleKeyDown} placeholder='Your Question'/>
            <div className='output'>
                {loading ? <CircularProgress color='inherit'/> : output}
            </div>
        </div>
    )
}
