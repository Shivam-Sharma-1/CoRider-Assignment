import { Box, Icon, Image, Input } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";


function ChatBox() {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" bgColor="white" px={4} py={2} pos="fixed" bottom={2} w="100%" maxW={375}>
            <Input placeholder="Repy to @Rahul Yadav" variant="unstyled" border="none" p={2} w="80%" outline="none" fontSize={14} />
            <Box display="flex" alignItems="center" justifyContent="space-between" gap={8}>
                <Icon as={AttachmentIcon} w="20px" h="20px" color="#141E0D" bgColor="transparent" />
                <Image src="/icons/send-icon.svg" w="20px" h="20px" color="#141E0D" bgColor="transparent" />
            </Box>
        </Box >
    )
}

export default ChatBox;