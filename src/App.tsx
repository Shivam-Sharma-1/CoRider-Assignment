import './App.css';
import { Box } from "@chakra-ui/react"
import ChatHeader from './components/ChatHeader';
import ChatBox from './components/ChatBox';
import ChatBubble from './components/ChatBubble';

function App() {
    return (
        <Box w="100%" h="100%" maxW={375} minH="100svh" mx="auto" bgColor="#FAF9F4">
            <ChatHeader />
            <ChatBubble self={false} />
            <ChatBubble self={true} />
            <ChatBox />
        </Box>
    );
}

export default App;
