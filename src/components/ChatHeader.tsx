import { useState } from "react";
import { Box, Input, Image, Heading, Popover, PopoverTrigger, Portal, PopoverContent, PopoverBody, Text, Avatar } from "@chakra-ui/react";
import { CheckIcon, ArrowBackIcon, EditIcon } from "@chakra-ui/icons";

const buttonData = [
    {
        id: 1,
        icon: "/icons/members-icon.svg",
        alt: "members-icon",
        text: "Members"
    },
    {
        id: 2,
        icon: "/icons/call-icon.svg",
        alt: "call-icon",
        text: "Share Number"
    },
    {
        id: 3,
        icon: "/icons/report-message-icon.svg",
        alt: "report-message-icon",
        text: "Report"
    }
]

function ChatHeader() {
    const [inputValue, setInputValue] = useState("Trip 1")
    const [isEditing, setIsEditing] = useState(false)

    return (
        <Box display={"flex"} flexDir="column" padding="14px" py="16px" gap="14px" borderBottom="2px solid #E5E5E0">
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} w="100%">
                <Box display="flex" alignItems="center" gap={3}>
                    <ArrowBackIcon w="24px" h="24px" cursor="pointer" />
                    <Input value={inputValue} fontSize="24px" variant="unstyled" border={"none"} w={200} bgColor="transparent" outline="none" p="5px" fontWeight={700} onChange={(e) => setInputValue(e.target.value)} isDisabled={!isEditing && true} _disabled={{ color: "initial" }} />
                </Box>
                <Box onClick={() => setIsEditing(!isEditing)} cursor="pointer">
                    {isEditing ?
                        <CheckIcon w="20px" h="20px" /> : <EditIcon w="20px" h="20px" />}
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" gap={4}>
                    <Avatar src='images/group-pic.svg' name="Group pic" borderRadius="full" boxSize="48px" border="none" />
                    <Box display="flex" flexDirection="column" justifyContent="space-between">
                        <Heading as="h4" fontSize="18px"><span style={{ color: "#606060", fontWeight: 600 }}>From </span>IGI Airport, T3</Heading>
                        <Heading as="h4" fontSize="18px"><span style={{ color: "#606060", fontWeight: 600 }}>To </span>Sector 28</Heading>
                    </Box>
                </Box>
                <Popover>
                    <PopoverTrigger>
                        <Image src='icons/kebab-icon.svg' alt="kebab-icon" boxSize="24px" cursor="pointer" />
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent w="156px" h="144px" borderRadius="8px" outline="none" right="40%" p={0}>
                            <PopoverBody w="100%" h="100%" borderRadius="inherit" p={0} display="flex" justifyContent="center" flexDir="column">

                                {buttonData.map((item, index) => (
                                    <Box w="100%" h="48px" display="flex" alignItems="center" gap="12px" key={item.id} cursor="pointer" padding="7px 12px" borderColor="#E5E5E0" borderStyle="solid" borderWidth={index === 1 ? "0 1px 0 1px" : "1px"}>
                                        <Image src={item.icon} alt={item.alt} w="20px" h="20px" color="#141E0D" bgColor="transparent" />
                                        <Text fontSize="14px" color="#141E0D" fontWeight={600}>{item.text}</Text>
                                    </Box>
                                ))}

                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>
            </Box>
        </Box >
    )

}

export default ChatHeader;