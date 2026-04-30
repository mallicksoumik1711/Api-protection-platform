import {toast} from "react-hot-toast";

const handleCopy = async(text, setCopied = null, resetTime = 2000) => {
    if(!text){
        return;
    }

    try{
        await navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
        if(setCopied){
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, resetTime);
        }
    } catch (error) {
        toast.error("Failed to copy!");
        console.error("Failed to copy text: ", error);
    }
}

export default handleCopy;