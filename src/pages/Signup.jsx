import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Navigate } from "react-router-dom"

function Signup(props) 
{

    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, seteusername] = useState()
    const [epass, setepass] = useState()

    function handleUInput(event) {
        seteusername(event.target.value)
    }

    function handlePInput(event) {
        setepass(event.target.value)
    }

    function adduser()
    {
        setusers([...users,{username:eusername,password:epass}])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username" onChange={handleUInput}></input>
                </div>


                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password" onChange={handlePInput}></input>
                </div>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="confirm password"></input>
                </div>


                <button onClick={adduser} className="bg-[#FCA201] w-24 p-1 rounded-md">Sign Up
                </button>

                <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
            </div>

        </div>
    )

}
export default Signup