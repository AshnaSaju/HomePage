import React from 'react'
import "./myprofile.css"
import userimg from "../../assets/user.png"

const MyProfile = () => {
    const name = "Ashna Saju"
    return (
        <div className='MyProfile'>
            <h2>
                Welcome, {name}
            </h2>
            <form>
                <div className="profileimg">

                    <img src={userimg} alt="" width={100} />
                    <button style={{ width: "20%",marginTop:"1%"}}>Change Profile Photo</button>
                </div>

                <div className="name field">
                    <div>
                        Name
                    </div>
                    <input className='txtbox' type="text" />
                </div>
                <div className="username field">
                    <div>
                        Username
                    </div>
                    <input className='txtbox' type="text" />
                </div>
                <div className="phonenumber field">
                    <div>
                        Phone Number
                    </div>
                    <input className='txtbox' type="text" />
                </div>
                <div className="email field">
                    <div>
                        E-Mail
                    </div>
                    <input className='txtbox' type="text" />
                </div>
                <div className="bio field">
                    <div>
                        Bio
                    </div>
                    <textarea name="bio" id="" rows="5" style={{ width: "60%" }}></textarea>
                </div>

                <div className="gender">
                    <div className="male">
                        <input type="radio" name="gender" id="Male" value="Male" />
                        <label for="Male">Male</label>
                    </div>
                    <div className="female">
                        <input type="radio" name="gender" id="Female" value="Female" />
                        <label for="Female">Female</label>
                    </div>
                    <dv className="none">
                        <input type="radio" name="gender" id="none" value="none" />
                        <label for="none">Prefer not to say</label>
                    </dv>
                </div>

                <div className="btn">
                    <button>Update</button>
                </div>
            </form>
        </div>
    )
}

export default MyProfile