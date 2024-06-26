import GenderCheckBox from "../../components/GenderCheckBox";

function Signup() {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300 mb-4">Signup for <span className="text-blue-500">BlinkChat</span></h1>

                <form>
                    <div>
                        <label htmlFor="" className="label pt-4 pb-1">
                            <span className="text-base label-text">Full name</span>
                        </label>
                        <input type="text" placeholder="Enter full name" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label htmlFor="" className="label pt-4 pb-1">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label htmlFor="" className="label pt-4 pb-1">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label htmlFor="" className="label pt-4 pb-1">
                            <span className="text-base label-text">Confirm password</span>
                        </label>
                        <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" />
                    </div>

                    <GenderCheckBox />

                    <a href="#" className="text-sm font-semibold hover:text-blue-500 mt-12 inline-block transition-all">{"Already have an account?"}</a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 bg-blue-600 text-white">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;
