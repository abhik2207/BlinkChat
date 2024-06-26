function GenderCheckBox() {
    return (
        <div className="flex mt-4">
            <div className="form-control">
                <label htmlFor="" className="label gap-2 cursor-pointer">
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox checkbox-primary border-slate-500" />
                </label>
            </div>
            <div className="form-control ml-5">
                <label htmlFor="" className="label gap-2 cursor-pointer">
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox checkbox-primary border-slate-500" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox;
