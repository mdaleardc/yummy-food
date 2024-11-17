import React, { useState } from "react"

const SignIn = () => {
  
    const [userData,
    setUserData] = useState({
      userName: "",
      email: "",
      number: "",
      createPass: "",
      confirmPass: "",
    });
  
  const [warn, setWarn] = useState({});
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    
    setUserData({...userData, [e.target.name] : e.target.value});

  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const warnObj = {};
    
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    const isValidEmail = emailRegex.test(userData.email);
    
    if (userData.userName === "") {
      warnObj.userName = "Please enter the username!";
    } else if (userData.userName.length <= 3 || userData.userName.length >= 30) {
      warnObj.userName = "Username must be between 4 to 30 characters!";
    }
    if (userData.email === "") {
      warnObj.email = "Please enter your email!";
    } else if (!isValidEmail) {
      warnObj.email = "Please enter valid email address!";
    }
    if (userData.number === "") {
      warnObj.number = "Please enter phone number!";
    } else if (!/^\d{11}$/.test(userData.number)) {
      warnObj.number = "Number must be only digits up to 11!"
    }
    if (userData.createPass === "") {
      warnObj.createPass = "Please enter a password!";
    } else if (userData.createPass.length <= 5 || userData.createPass.length >= 17) {
      warnObj.createPass = "Password must be between 6 to 16 characters long!";
    }
    if (userData.confirmPass === "") {
      warnObj.confirmPass = "Please enter confirm password!";
    } else if (userData.confirmPass !== userData.createPass) {
      warnObj.confirmPass = "Password dit not match!"
    }
      else {
      setFlag(true);
    }
    
    setWarn(warnObj);
  }
  
  return (
    <div className='mx-auto mt-[4rem] mb-[1rem]'>
    <form className="form-section p-[1rem] bg-[#007E8B] border-[2px] rounded-3xl my-[1rem] w-[95%] md:w-[50%] mx-auto my-0" onSubmit={handleSubmit}>
    <h1 className="text-1xl text-center text-[#345]">{flag ? <p>{userData.userName} you have registered successfuly!</p> : ""}</h1>
      <fieldset className="my-[0] mx-[auto] block">
        <div className="text-3xl font-bold text-[#4ef] text-center my-[1rem]">
Sign Up
    </div>
        <div className="my-[0] mx-[auto] flex flex-col gap-[0.5rem] justify-center items-center">
      <input type="text" className="text-[#000] border-[2px] rounded h-[2rem] sm:h-[2.5rem] font-bold pl-[0.5rem] w-[80%] username" name="userName" placeholder="Username" autoComplete="off" value={userData.userName} onChange={handleChange} />
      <span className="text-[red]">{warn.userName}</span>
      <input type="text" className="text-[#000] border-[2px] rounded h-[2rem] sm:h-[2.5rem] font-bold pl-[0.5rem] w-[80%] email" name="email" placeholder="Email" autoComplete="off" value={userData.email} onChange={handleChange} />
      <span className="text-[red]">{warn.email}</span>
      <input type="text" className="text-[#000] border-[2px] rounded h-[2rem] sm:h-[2.5rem] font-bold pl-[0.5rem] w-[80%] number" name="number" placeholder="Phone number" autoComplete="off" value={userData.number} onChange={handleChange} />
      <span className="text-[red]">{warn.number}</span>
      <input type="text" className="text-[#000] border-[2px] rounded h-[2rem] sm:h-[2.5rem] font-bold pl-[0.5rem] w-[80%] creat-pass" name="createPass" placeholder="Create password" autoComplete="off" value={userData.createPass} onChange={handleChange} />
      <span className="text-[red]">{warn.createPass}</span>
      <input type="text" className="text-[#000] border-[2px] rounded h-[2rem] sm:h-[2.5rem] font-bold pl-[0.5rem] w-[80%] confirm-pass" name="confirmPass" placeholder="Confirm password" autoComplete="off" value={userData.confirmPass} onChange={handleChange} />
      <span className="text-[red]">{warn.confirmPass}</span>
    </div>
    </fieldset>
      <button type="submit" className="w-[5rem] rounded h-[2rem] sm:h-[2.5rem] my-[0] mx-[auto] py-[0.4rem] text-white font-bold text-center block mt-[1rem] bg-[#00A4FF]">Sign Up</button>
    </form>
    </div>
  )
}

export default SignIn;