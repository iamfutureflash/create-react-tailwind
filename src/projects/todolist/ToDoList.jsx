import React, { useState } from "react";

const ToDoList = () => {
  const [currentNote, setCurrentNote] = useState("");
  const [listOfNotes, setListOfNotes] = useState([]);

  function addNote() {
    setListOfNotes((arrayItem) => {
      return [...arrayItem, currentNote];
    });
    setCurrentNote(" ");
  }
  function inputEvent(e) {
    setCurrentNote(e.target.value);
  }
  function deleteItem(PresentNote) {
    const newNotes = listOfNotes.filter(currentNote=>currentNote!==PresentNote);
    setListOfNotes(newNotes);
  }

  return (
    <>
      <div className="bg-gray-800 w-screen h-screen py-4 px-1 my-auto justify-center overflow-x-hidden">
        <div className="bg-gray-900 flex flex-col justify-center items-center my-5  mx-auto px-2 py-4 rounded-xl h-fit w-[95%]">
          <h1 className="text-5xl text-center font-extrabold bg-purple-600 w-full rounded-xl py-2 my-4">
            ToDo List
          </h1>
          <div className="flex text-center font-extrabold bg-purple-600 w-fit rounded-xl py-1 px-1 my-2">
            <input
              onChange={inputEvent}
              value={currentNote}
              placeholder="Add Note"
              className="px-2 rounded-lg bg-slate-800 text-white"
            />
            <button
              onClick={addNote}
              className="px-3 text-xl py-1 mx-1 bg-slate-800 rounded-full text-white "
            >
              +
            </button>
          </div>
          <div className="order-list text-slate-300 font-medium w-[70%]">
            <ol className="flex flex-col ">
              {/* <li className="">{currentNote}</li> */}
              {listOfNotes.map(val => {
                return (
                  <>
                    <div className="flex flex-row justify-start place-items-center mx-2 my-1 px-2 py-2 bg-slate-600 rounded-lg w-full">
                      
                      <li
                        className="shadow-2xl shadow-green-300 "
                      >
                        {val}
                      </li>
                      <button
                        className="mx-2 px-3 py-1 rounded-full text-xl bg-green-800 hover:bg-red-600"
                        onClick={()=> deleteItem(val)}
                      >
                        x
                      </button>
                    </div>
                  </>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default ToDoList;
