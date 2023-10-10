import axios from "axios";

interface FetcherProps {
    url: string;
}

async function fetcher({ url }: FetcherProps) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export default fetcher;