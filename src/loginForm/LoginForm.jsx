import React, { useState } from "react";
const Form = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  function SaveData(e) {
    e.preventDefault();
  }
  const inputEvent = (e) => {
    const {value,name}= e.target;
    setFullName(() => {
      return{
        ...fullName,
        [name]:value,
      };
      // if (name === "fname") {
      //   return {
      //       fname:value,
      //       lname:preValue.lname,
      //       email:preValue.email,
      //       phone:preValue.phone,
      //   };
      // } else if (name === "lname") {
      //   return {
      //       fname:preValue.fname,
      //       lname:value,
      //       email:preValue.email,
      //       phone:preValue.phone,
      //   };
      // } else if (name === "email") {
      //   console.log(preValue.placeholder)
      //   return {
      //       fname:preValue.fname,
      //       lname:preValue.lname,
      //       email:value,
      //       phone:preValue.phone,
      //   };
      // }else if (name === "phone") {
      //   console.log(preValue.placeholder)
      //   return {
      //       fname:preValue.fname,
      //       lname:preValue.lname,
      //       email:preValue.email,
      //       phone:value,
      //   };
      // }
    });    
  };
  return (
    <form
      onSubmit={SaveData}
      className="bg-slate-400 flex flex-col justify-center items-center px-4 py-4 w-screen h-screen font-extrabold"
    >
      <h1 className="text-3xl py-2">
        Hello🙋 {fullName.fname} {fullName.lname}
      </h1>
      <p className="text-3xl py-2">
        {fullName.email}
      </p>
      <p className="text-3xl py-2">
        {fullName.phone}
      </p>
      <input
        onChange={inputEvent}
        name="fname"
        className=" text-xl my-4 rounded-lg py-2 px-2 hover:bg-green-400"
        type="text"
        placeholder="💁 Enter Your First Name"
        value={fullName.fname}
      />
      <input
        onChange={inputEvent}
        name="lname"
        className=" text-xl my-4 rounded-lg py-2 px-2 hover:bg-green-400"
        type="text"
        placeholder="🧒 Enter Your Last Name"
        value={fullName.lname}
      />
      <input
        onChange={inputEvent}
        name="email"
        className=" text-xl my-4 rounded-lg py-2 px-2 hover:bg-green-400"
        type="text"
        placeholder="📧 Enter Your Email"
        value={fullName.email}
      />
      <input
        onChange={inputEvent}
        name="phone"
        className=" text-xl my-4 rounded-lg py-2 px-2 hover:bg-green-400"
        type="number"
        placeholder="☎️ Enter Your Number"
        value={fullName.phone}
      />
      <button
        type="submit"
        className="text-3xl my-4 bg-green-500 px-6 py-2 rounded-xl"
      >
        Submit🥇
      </button>{" "}
    </form>
  );
};
export default Form;
