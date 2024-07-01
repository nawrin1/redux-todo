import TodoCard from "./TodoCard";

const TodoContainer = () => {

    return (
      <div>
        <div className="flex justify-between mb-5 ">
            <button>Add to do</button>
            <button>filter</button>
            
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px] space-y-3">
            {/* <TodoCard></TodoCard>
            <TodoCard></TodoCard>
            <TodoCard></TodoCard> */}
                <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
        </div>

        </div>
      </div>
    );
  };
  
  export default TodoContainer;