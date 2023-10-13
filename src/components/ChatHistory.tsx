import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import ChatBubble from "./ChatBubble";
import fetcher from "../utils/fetcher";
import { Box, Spinner } from "@chakra-ui/react";

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
    const [pageNo, setPageNo] = useState(0)
    const [hasMore, setHasMore] = useState(true)

    function fetchMoreData() {
        setPageNo((prevPageNo) => prevPageNo + 1)
    };

    useEffect(() => {
        async function fetchData() {
            const data = await fetcher({ url: `https://qa.corider.in/assignment/chat?page=${pageNo}` })
            setMessages((prevMessages) => [...prevMessages, ...data.chats])
            if (data.chats.length === 0) {
                setHasMore(false)
            }
        }
        fetchData()
    }, [pageNo])

    return (
        <Box id="scrollableDiv" overflow="auto" h="80%" display="flex" flexDir="column-reverse" w="100%" px={[0, "60px", "60px", "250px"]}>
            <InfiniteScroll
                dataLength={messages.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='md'
                    margin="auto"
                    my={2}
                />}
                style={{ display: 'flex', flexDirection: 'column-reverse', width: "100%" }}
                inverse={true}
                scrollableTarget="scrollableDiv"
            >
                {messages.map((chat) => (
                    <ChatBubble key={chat.id} self={chat.sender?.self} image={chat.sender?.image} message={chat.message} />
                ))}
            </InfiniteScroll>

        </Box >
    )
}

export default ChatHistory;