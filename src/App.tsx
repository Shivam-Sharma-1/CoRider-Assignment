import './App.css';
import { Box } from "@chakra-ui/react"
import ChatHeader from './components/ChatHeader';
import ChatBox from './components/ChatBox';
import ChatHistory from './components/ChatHistory';

function App() {
    return (
        <Box w="100%" h="100vh" maxH="100dvh" mx="auto" bgColor="#FAF9F4" display="flex" flexDir="column">
            < ChatHeader />
            <ChatHistory />
            <ChatBox />
        </Box >
    );
}

export default App;
