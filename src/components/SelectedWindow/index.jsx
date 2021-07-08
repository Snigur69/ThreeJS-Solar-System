import React from 'react'
import styles from './styles.module.css'

export const SelectedWindow = ({ name }) => {
    console.log(name);
    return (
        <div className={styles.window}>
            <h1>{name}</h1>
        </div>
    )
}