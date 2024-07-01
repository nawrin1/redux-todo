

const TodoCard = () => {

  return (
    <div className=" p-5 w-full h-full rounded-lg space-y-3 flex justify-between bg-orange-300">
    <input type="checkbox" />
    <p>Todo Title</p>
    <p>Time</p>
    <p>Description</p>
    <div className="space-x-5">
        <button>Delete</button>
        <button>Edit</button>
    </div>
</div>
  );
};

export default TodoCard;