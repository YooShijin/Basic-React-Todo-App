import TodoList from "../TodoList";
import classes from "./MainFrame.module.css"
const MainFrame = (props) => {
    console.log(classes);
return (<div className={classes.backGround}><p className={classes.bigHeading}>My To-Do's</p>
        <TodoList></TodoList></div>)
}
export default MainFrame;
