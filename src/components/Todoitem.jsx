function TodoItem(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setactivityArr

    function handledelete(deleteid) 
    {
        var tempArr = activityArr.filter(function (item) {
            if (item.id === deleteid) 
            {
                return false
            }else{
                return true
            }
        })
        setActivityArr(tempArr)

    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.item.activity}</p>
            <button className="text-red-500" onClick={() => handledelete(props.id)}>Delete</button>
        </div>
    )
}

export default TodoItem