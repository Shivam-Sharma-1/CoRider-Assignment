interface FetcherProps {
    url: string;
}

async function fetcher({ url }: FetcherProps) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export default fetcher;