import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput() {
    const [message, setMessage] = useState('');

    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message) return;

        await sendMessage(message);
        setMessage("");
    }

    return (
        <form className="px-4 my-3" onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input type="text" placeholder="Send a message" className="border border-gray-800 outline-none bg-gray-700 text-white text-sm rounded-lg block w-full p-3"
                    value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    {loading ? <span className="loading loading-spinner"></span> : <IoMdSend />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput;
