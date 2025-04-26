
"use client"
import Image from "next/image";
import F1Logo from "./assets/F1Lens2.png"
import { useChat } from "ai/react"
import { Message } from "ai"
import Bubble from "./components/Bubble";
import LoadingBubble from "./components/LoadingBubble";
import PromptSuggestionsRow from "./components/PromptSuggestionsRow";
import { Messages } from "openai/resources/beta/threads/messages.mjs";


const Home = ()=>{

    const { append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat() 

    const noMessages = !messages || messages.length === 0;

    const handlePrompt = (promptText) =>{
        const msg: Message = {
            id: crypto.randomUUID(),
            content: promptText  ,
            role: 'user'
        }
        append(msg)
    }

    return(
        <main>
            <Image src = {F1Logo} width = "250" alt = "F1Lens Logo"></Image>
            <section className={noMessages? "": "populated"}>
                {noMessages ? (
                    <>
                        <p className = "starter-text">
                            F1Lens: Your Ultimate F1 Game Companion! Get fast, reliable answers to all your questions about the F1 games. From game strategies and car setups to driver insights and race simulations, F1Lens is here to elevate your gaming experience and help you stay ahead of the competition.
                        </p>
                        <br/>
                        <PromptSuggestionsRow onPromptClick={handlePrompt}/>
                    </>
                ):(
                    <>
                        {messages.map((message, index)=> <Bubble key = {`message-${index}`}message={message}/>)}
                        {isLoading && <LoadingBubble/>}
                    </>
                )}
            </section>

            <form onSubmit={handleSubmit}>
                <input className="question-box" onChange = {handleInputChange} value = {input} placeholder= "Ask me something !"/>
                <input type = "submit"/>
            </form>

        </main>
    )
}
export default Home;