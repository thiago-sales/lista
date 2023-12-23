import { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
const [input, setInput] = useState("");

const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
}

    return ( 
    <>
        <form className="flex flex-row items-center gap-3">
            <input
                className="border rounded-lg py-1.5 px-2.5 text-lg"
                type="text"
                placeholder="Adicionar tarefa"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                
            />
            <button 
                className=" text-white py-2 px-3.5 bg-violet-500 rounded-lg
                font-semibold hover:opacity-70"
                onClick={handleAddTask}
                >
                Adicionar
            </button>
        </form>
    </>
    )
};


export default Input;