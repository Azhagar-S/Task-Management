import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import  axios from 'axios'
import {loginStart, loginSuccess, loginFailure} from '../Slices/AuthSlice'

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name , setName] = useState("")
  const [phone ,setPhone] = useState("")
  const [address , setAddress] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch();


  

  const handleSubmit = async(e)=>{
    e.preventDefault()

    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:3000/api/register", {
            email,
            password,
            name,
            phone,
            address
          });

       
          dispatch(loginSuccess({email,password,name,phone}));
        
    } catch (error) {
        dispatch(loginFailure("Login failed"));
    }
}
  return (
    <div class="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
      <div class="text-center mb-12 sm:mb-16">
        
        <h4 class="text-slate-600 text-base mt-6">Sign up into your account</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <label class="text-slate-800 text-sm font-medium mb-2 block">First Name</label>
            <input name="name" 
            onClick={(e)=>setName(e.target.value)}
            type="text" class="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
          </div>
          <div>
            <label class="text-slate-800 text-sm font-medium mb-2 block">Address</label>
             <textarea
             onClick={(e)=>setAddress(e.target.value)}
             class="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Address" >

             </textarea>
          </div>
          <div>
            <label class="text-slate-800 text-sm font-medium mb-2 block">Email Id</label>
            <input 
            onClick={(e)=>setEmail(e.target.value)}
            name="email" type="text" class="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
          </div>
          <div>
            <label class="text-slate-800 text-sm font-medium mb-2 block">Mobile No.</label>
            <input
            onClick={(e)=>setPhone(e.target.value)}
            name="number" type="number" class="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" />
          </div>
          <div>
            <label class="text-slate-800 text-sm font-medium mb-2 block">Password</label>
            <input 
            onClick={(e)=>setPassword(e.target.value)}
            name="password" type="password" class="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
          </div>
         
        </div>

        <div class="mt-12">
          <button type="button" class="mx-auto block py-3 px-6 text-sm font-medium tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup