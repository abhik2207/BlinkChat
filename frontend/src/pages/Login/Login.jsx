function Login() {
    return (
        <div className="flex items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300 mb-4">Login to <span className="text-blue-500">BlinkChat</span></h1>

                <form>
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

                    <a href="#" className="text-sm font-semibold hover:text-blue-500 mt-12 inline-block transition-all">{"Don't have an account?"}</a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 bg-blue-600 text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;


// STARTER CODE

// function Login() {
//     return (
//         <div className="flex items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className="text-3xl font-semibold text-center text-gray-300 mb-4">Login to <span className="text-blue-500">BlinkChat</span></h1>

//                 <form>
//                     <div>
//                         <label htmlFor="" className="label pt-4 pb-1">
//                             <span className="text-base label-text">Username</span>
//                         </label>
//                         <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
//                     </div>
//                     <div>
//                         <label htmlFor="" className="label pt-4 pb-1">
//                             <span className="text-base label-text">Password</span>
//                         </label>
//                         <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
//                     </div>

//                     <a href="#" className="text-sm font-semibold hover:text-blue-500 mt-12 inline-block transition-all">{"Don't have an account?"}</a>
//                     <div>
//                         <button className="btn btn-block btn-sm mt-2 bg-blue-600 text-white">Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login;