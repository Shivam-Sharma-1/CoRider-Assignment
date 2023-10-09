import { Box, Icon, Image, Input } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";


function ChatBox() {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" bgColor="white" px={16} py={8} pos="fixed" bottom={6} w="100%" maxW={375}>
            <Input placeholder="Repy to @Rahul Yadav" variant="unstyled" border="none" p={5} w="80%" outline="none" fontSize={14} />
            <Box display="flex" alignItems="center" justifyContent="space-between" gap={18}>
                <Icon as={AttachmentIcon} w={20} h={20} color="#141E0D" bgColor="transparent" />
                <Image src="/icons/send-icon.svg" w={20} h={20} color="#141E0D" bgColor="transparent" />
            </Box>
        </Box >
    )
}

export default ChatBox;