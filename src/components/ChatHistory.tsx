import { useEffect, useState } from "react";
import ChatBubble from "./ChatBubble";
import fetcher from "../utils/fetcher";
import { Box } from "@chakra-ui/react";

interface SenderProps {
    image: string,
    is_kyc_verified: boolean,
    self: boolean,
    user_id: string,
}

interface ChatProps {
    id: string,
    message: string,
    sender: SenderProps,
    time: string
}

interface ChatHistoryProps {
    chats: ChatProps[],
    from: string,
    message: string,
    name: string,
    status: string,
    to: string,
}

function ChatHistory() {
    const [messages, setMessages] = useState<ChatHistoryProps>({ chats: [], from: "", message: "", name: "", status: "", to: "" })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const data = await fetcher({ url: "https://qa.corider.in/assignment/chat?page=1" })
            setMessages(data)
            setIsLoading(false)
        }
        fetchData()
    }, [])

    return (
        <Box overflow="auto" h="70%">
            {isLoading ? <h1>Loading</h1> : messages.chats.map((message) => (
                <ChatBubble key={message.sender.user_id} self={message.sender.self} image={message.sender.image} />
            ))}
        </Box>
    )
}

export default ChatHistory;