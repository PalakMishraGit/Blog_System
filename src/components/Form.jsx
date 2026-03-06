export default function Form(){
    return(
        <div className="flex flex-col text-center w-1/3 mx-auto space-y-3">
            <div>Form Component</div>
            <input type="firstname" placeholder="Enter text here" className=""/>
            <input type="lastname" placeholder="Enter lastname here" />
            <input type="email" placeholder="Enter email here" />
            <input type="number" placeholder="Enter number here" />
            <label>Gender</label>
            <checkbox>
                <input type="radio" name="gender" value="male" /> Male
                <input type="radio" name="gender" value="female" /> Female
            </checkbox>
        </div>
    )
}