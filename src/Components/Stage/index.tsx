import styles from './style.module.css';

type TypeStage = {
    name:string;
    task:string;
}


function Stage({name}:TypeStage){
    return (
        <div className={styles['stage']}>
            <h2 className={styles['stage__title']}>{name}</h2>
            <div className={styles['stage__tasks']}></div>
            <button className={styles['stage__addCard']}>Add Card</button>
        </div>
    )
}

export default Stage