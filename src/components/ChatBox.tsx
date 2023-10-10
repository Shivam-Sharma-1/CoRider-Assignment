import { Box, Icon, Image, Input, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Portal } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";

const buttonData = [
    {
        id: 1,
        icon: "/icons/camera-icon.svg",
        alt: "camera-icon",
    },
    {
        id: 2,
        icon: "/icons/video-icon.svg",
        alt: "video-icon",
    },
    {
        id: 3,
        icon: "/icons/document-icon.svg",
        alt: "document-icon",
    }
]


function ChatBox() {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" bgColor="white" px={5} py={2} w="100%" maxW={375} pos="fixed" bottom={2}>
            <Input placeholder="Reply to @Rahul Yadav" variant="unstyled" border="none" p={2} w="80%" outline="none" fontSize={14} />
            <Box display="flex" alignItems="center" justifyContent="space-between" gap="16px">
                <Popover placement="top" >
                    <Portal>
                        <PopoverContent w="124px" h="44px" borderRadius="1000px" boxShadow="0px -1px 8px 0px rgba(0, 0, 0, 0.05)" outline="none">
                            <PopoverBody w="100%" h="100%" borderRadius="inherit" bgColor="rgba(0, 128, 0, 1)" boxShadow="0px -1px 8px 0px rgba(0, 0, 0, 0.05)" display="flex" gap="16px" alignItems="center" justifyContent="center">

                                {buttonData.map((item) => (
                                    <Image src={item.icon} key={item.id} alt={item.alt} w="20px" h="20px" color="white" bgColor="transparent" cursor="pointer" />
                                ))}

                            </PopoverBody>
                            <PopoverArrow bgColor="rgba(0, 128, 0, 1)" />
                        </PopoverContent>
                    </Portal>
                    <PopoverTrigger>
                        <Icon as={AttachmentIcon} w="20px" h="20px" color="#141E0D" bgColor="transparent" cursor="pointer" />
                    </PopoverTrigger>
                </Popover>
                <Image src="/icons/send-icon.svg" w="20px" h="20px" color="#141E0D" bgColor="transparent" cursor="pointer" />
            </Box>
        </Box >
    )
}

export default ChatBox;