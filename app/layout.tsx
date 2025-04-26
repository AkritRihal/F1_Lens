import "./global.css"

export const metadata = {
    title: "F1GPT",
    description: "F1GPT is a conversational AI model that can answer all questions about F1"
}

const RootLayout = ({children})=>{
    return(
        <html lang = "en">
            <body>{ children}</body> 
        </html>
    )
}

export default RootLayout;