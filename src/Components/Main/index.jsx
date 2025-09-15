import styles from './style.module.css';
import Stage from '../Stage';

function Main(){
    //Stages
    const backlog = "Backlog";
    const ready = "Ready";
    const inProgress = "in Progress";
    const finished = "Finished";

    return (
        <main className={styles["main"]}>
            <Stage name={backlog} />
            <Stage name={ready} />
            <Stage name={inProgress} />
            <Stage name={finished} />
        </main>
    )
}

export default Main;