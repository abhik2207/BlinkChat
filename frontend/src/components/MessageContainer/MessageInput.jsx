import { IoMdSend } from "react-icons/io";

function MessageInput() {
    return (
        <form className="px-4 my-3">
            <div className="w-full relative">
                <input type="text" placeholder="Send a message" className="border border-gray-800 outline-none bg-gray-700 text-white text-sm rounded-lg block w-full p-3" />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <IoMdSend />
                </button>
            </div>
        </form>
    )
}

export default MessageInput;
