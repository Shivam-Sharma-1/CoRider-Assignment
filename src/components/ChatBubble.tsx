import { Avatar, Box, Text } from "@chakra-ui/react"

interface ChatBubbleProps {
    self: boolean
}

function ChatBubble({ self }: ChatBubbleProps) {
    return (
        <Box display="flex" gap={2} p={4} justifyContent={self ? "right" : "left"} >
            {!self && <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size="xs" />}
            <Box width="83%" bgColor={self ? "#1C63D5" : "white"} borderRadius={self ? "12px 12px 0px 12px" : "0px 12px 12px 12px"} boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.08) " p={2} display="flex" justifyContent="center" alignItems="center">
                <Text fontSize="14px" color={self ? "white" : "#606060"}>Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money</Text>
            </Box>
        </Box >
    )
}

export default ChatBubble