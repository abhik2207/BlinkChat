import { IoSearch } from "react-icons/io5";

function SearchInput() {
    return (
        <form className="flex items-center justify-between gap-2">
            <input type="text" placeholder="Search..." className="input input-bordered rounded-full w-full" />
            <button type="submit" className="btn btn-circle bg-blue-600 text-white">
                <IoSearch className="w-6 h-6 outline-none" />
            </button>
        </form>
    )
}

export default SearchInput;
