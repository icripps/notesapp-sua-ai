import styles from '../../styles/Home.module.css'

export type NoteProps = {
    id: string,
    title: string | null | undefined,
    note: string | null | undefined
}


const Note = (props:NoteProps)=>{
    const {title, note} = props
    return (<div  className={styles.card}>
    <h2>{title} &rarr;</h2>
    <p>{note}</p>
  </div>)
}

export default Note