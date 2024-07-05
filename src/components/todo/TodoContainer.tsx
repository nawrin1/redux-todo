import { useAppSelector } from "@/redux/hook";
// import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  const [priority,setPriority]=useState("")
  console.log(priority)
    // const {todos}=useAppSelector((state)=>state.todos)
    // state.todos mane store.ts e todos name reducer ta naming kora tai, ar porer {todos} ta holo actual state ta cz amra initual array ta todos namok key te store kore rakhsi in an obj

    //from server
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const { data:todos, error, isLoading } = useGetTodosQuery(undefined,{
    //   pollingInterval: 1000,
    // });

   //another way instead of polling interva.
    const { data:todos, error, isLoading } = useGetTodosQuery(priority);
    if(isLoading){
      return <p>Loading..</p>
    }

    return (
      <div>
        <div className="flex justify-between mb-5 ">
            {/* <Button>Add to do</Button>
            <Button>filter</Button> */}
                    <AddTodoModal/>
                    <TodoFilter priority={priority} setPriority={setPriority}/>
            
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
        
        {todos?.data.map((item) => (
            <TodoCard {...item} />
          ))}

        </div>
                {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '} */}
        </div>

        </div>
     
    );
  };
  
  export default TodoContainer;