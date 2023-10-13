import { Avatar, Box, Text } from "@chakra-ui/react"

interface ChatBubbleProps {
    self: boolean,
    image: string,
    message: string,
}

function ChatBubble({ self, image, message }: ChatBubbleProps) {
    return (
        <Box display="flex" gap={2} px={4} py={3} justifyContent={self ? "right" : "left"} w="100%">
            {!self && <Avatar src={image} size="xs" />}
            <Box w="80%" maxW={500} bgColor={self ? "#1C63D5" : "white"} borderRadius={self ? "12px 12px 0px 12px" : "0px 12px 12px 12px"} boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.08) " p={2} display="flex" justifyContent="center" alignItems="center">
                <Text fontSize="14px" color={self ? "white" : "#606060"}>{message}</Text>
            </Box>
        </Box >
    )
}

export default ChatBubble