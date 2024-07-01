import { useAppSelector } from "@/redux/hook";
// import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
    const {todos}=useAppSelector((state)=>state.todos)// state.todos mane store.ts e todos name reducer ta naming kora tai, ar porer {todos} ta holo actual state ta cz amra initual array ta todos namok key te store kore rakhsi in an obj

    return (
      <div>
        <div className="flex justify-between mb-5 ">
            {/* <Button>Add to do</Button>
            <Button>filter</Button> */}
                    <AddTodoModal/>
                    <TodoFilter />
            
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
        
        {todos?.map((item) => (
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