import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function Login(props)
{
    const [eusername,seteusername] = useState()
    const [epass,setepass] = useState()
    const [ruser,setruser] = useState(true)

    const navigate = useNavigate()
    const users = props.users
    const setuser = props.setuser

    function handleUInput(event)
    {
        seteusername(event.target.value)
    }

    function handlePInput(event)
    {
        setepass(event.target.value)
    }

    function checkUser()
    {
        var userfound = false


        users.forEach(function(item)
       {
        if(item.username === eusername && item.password === epass)
        {
            console.log("Login succesful")
            userfound = true
            navigate("/landing",{state:{user:eusername}})
        }
       
       }
    )

    if(userfound === false)
    {
        console.log("Login failed")
        setruser(false)
    }

    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser?<p>I help you to manage your activities after you login :)</p>:<p className="text-red-500">Please Sign Up before you login!!</p>}

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username"
                    onChange={handleUInput}
                    />
                </div>


                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password"
                    onChange={handlePInput}
                    />
                </div>


                <button onClick={checkUser} className="bg-[#8272DA] w-24 p-1 rounded-md">Login
                </button>
                <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
            </div>

        </div>
    )
}

export default Login