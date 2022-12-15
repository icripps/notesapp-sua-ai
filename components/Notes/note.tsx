import styles from '../../styles/Home.module.css'

export type NoteProps = {
    title: string | null | undefined,
    note: string | null | undefined
}


const Note = (props:NoteProps)=>{
    const {title, note} = props
    return (<a href="https://nextjs.org/docs" className={styles.card}>
    <h2>{title} &rarr;</h2>
    <p>{note}</p>
  </a>)
}

export default Note