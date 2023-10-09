import { useState } from "react";

import { Box, Input, Image, Heading } from "@chakra-ui/react";
import { CheckIcon, ArrowBackIcon, EditIcon } from "@chakra-ui/icons";

function ChatHeader() {
    const [inputValue, setInputValue] = useState("Trip 1")
    const [isEditing, setIsEditing] = useState(false)

    return (
        <Box display={"flex"} flexDir="column" padding="14px" py="16px" gap="14px" borderBottom="2px solid #E5E5E0">
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} w="100%">
                <Box display="flex" alignItems="center" gap={3}>
                    <ArrowBackIcon w="24px" h="24px" cursor="pointer" />
                    <Input value={inputValue} fontSize="24px" variant="unstyled" border={"none"} w={200} bgColor="transparent" outline="none" p="5px" fontWeight={700} onChange={(e) => setInputValue(e.target.value)} isDisabled={!isEditing && true} />
                </Box>
                <Box onClick={() => setIsEditing(!isEditing)} cursor="pointer">
                    {isEditing ?
                        <CheckIcon w="20px" h="20px" /> : <EditIcon w="20px" h="20px" />}
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" gap={4}>
                    <Image src='images/group-pic.svg' alt="Group pic" borderRadius='full'
                        boxSize="48px" border="none" />
                    <Box display="flex" flexDirection="column" justifyContent="space-between">
                        <Heading as="h4" fontSize="18px"><span style={{ color: "#606060", fontWeight: 600 }}>From </span>IGI Airport, T3</Heading>
                        <Heading as="h4" fontSize="18px"><span style={{ color: "#606060", fontWeight: 600 }}>To </span>Sector 28</Heading>
                    </Box>
                </Box>
                <Image src='icons/kebab-icon.svg' alt="kebab-icon" boxSize="24px" cursor="pointer" />
            </Box>
        </Box >
    )

}

export default ChatHeader;