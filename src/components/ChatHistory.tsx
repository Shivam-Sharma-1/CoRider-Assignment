import { useEffect, useRef, useState } from "react";
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

function ChatHistory() {
    const [messages, setMessages] = useState<ChatProps[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [pageNo, setPageNo] = useState(0)
    const [scrollOnce, setScrollOnce] = useState(false)
    const observer = useRef<HTMLDivElement | null>(null)

    function handleScroll() {
        if (observer.current) {
            if (observer.current.scrollTop <= 250) {
                setPageNo((prevPageNo) => prevPageNo + 1)
                observer.current.scrollTop = 400
            }
        }
    }

    function scrollBottom() {
        if (observer.current && !scrollOnce) {
            observer.current.scrollTop = observer.current.scrollHeight;
            setScrollOnce(true)
        }
    }

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const data = await fetcher({ url: `https://qa.corider.in/assignment/chat?page=${pageNo}` })
            setMessages((prevMessages) => [...data.chats, ...prevMessages])
            setIsLoading(false)
        }
        fetchData()
    }, [pageNo])

    if (isLoading) return <div>Loading...</div>

    return (
        <Box overflow="auto" h="70%" ref={observer} onScroll={handleScroll} onLoad={scrollBottom}>
            {messages.map((chat) => (
                <ChatBubble key={chat.id} self={chat.sender?.self} image={chat.sender?.image} message={chat.message} />
            ))}
        </Box >
    )
}

export default ChatHistory;