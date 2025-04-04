import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQGZdfbmORJSFw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726497455491?e=1749081600&v=beta&t=pUyvt3pWCpY1vp8ywVPQQazluSbgcVGHs6Rk5Rk-Dj8" />

            <div className={styles.commentBox}>
                <div className={styles.commentConten}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Michelangelo Morais</strong>
                            <time title='02 de abril às 16:00h' datetime="2025-04-02 16:00:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        
        </div>
    )
}