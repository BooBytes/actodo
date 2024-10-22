import { useState } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"

function TodoContainer() {

    const [activityArr,setactivityArr] = useState([

        {
            id:1,
            activity: "Go for a walk"
        },
        {
            id:2,
            activity: "Have Breakfast"
        },
        {
            id:3,
            activity: "Read a book"
        }
       
    ])

    return (

        <div>
            <div className="flex gap-5 flex-wrap">

                <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}></AddTodoForm>
                <TodoList activityArr={activityArr} setactivityArr={setactivityArr}></TodoList>
            </div>
        </div>
    )
}
export default TodoContainer