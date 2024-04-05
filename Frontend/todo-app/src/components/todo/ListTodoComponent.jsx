export default function ListTodoComponent(){

    const today = new Date()

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getMonth())

    const todos = [
        {id:1, description: 'Learn AWS', done: false, targetDate:targetDate},
        {id:2, description: 'Learn FullStack', done: false, targetDate:targetDate},
        {id:3, description: 'Learn Azure', done: false, targetDate:targetDate}
    ]
    return (
        <div className="container">
            <h1>Thing you want to do !</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}