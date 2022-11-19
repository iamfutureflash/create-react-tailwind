import React from "react";
import img1 from ".//images/plp.jpg";
const Form = () => {
  return (
    <>
      <form class="bg-slate-600 flex flex-col justify-center items-center ">
        <div className="mx-5 mt-5 mb-2 px-5 pt-5 pb-2">
          <img
            className="w-[80%] mx-auto md:w-[50%] lg:w-[30%]"
            src={img1}
            class="center"
            alt="Product_Listing"
          />
        </div>
        <div class="input-icons mx-2 my-2 py-2">
          <input
            class="input-field mx-2 my-2 py-2 px-4"
            type="text"
            placeholder="Name as Per Cost"
            required
          />
        </div>
        <div class="input-icons ">
          <input class="input-fieldpy-2 py-2 px-4" type="text" placeholder="Email" required />
        </div>
        <div class="input-icons ">
          <input
            class="input-field py-2 px-4"
            type="text"
            placeholder="Contact Number"
            required
          />
        </div>
        <div class="input-icons">
          <input
            class="input-field py-2 px-4"
            type="text"
            placeholder="GST  Number"
            required
          />
        </div>
        <div class="input-icons mx-2 my-2 py-2">
          <input
            class="input-field mx-2 my-2 py-2 px-4"
            type="text"
            placeholder="Shop By Category"
            required
          />
        </div>
        <button class="mx-2 my-2 py-2">
          <a href="#" className="mx-2 my-2 py-2 px-4 bg-green-500"> Next </a>
        </button>
      </form>
    </>
  );
};
export default Form;
