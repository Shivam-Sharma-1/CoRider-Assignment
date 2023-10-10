import './App.css';
import { Box } from "@chakra-ui/react"
import ChatHeader from './components/ChatHeader';
import ChatBox from './components/ChatBox';
import ChatHistory from './components/ChatHistory';

function App() {
    return (
        <Box w="100%" h="100dvh" maxW={375} mx="auto" bgColor="#FAF9F4" pos="relative">
            <ChatHeader />
            <ChatHistory />
            <ChatBox />
        </Box>
    );
}

export default App;
