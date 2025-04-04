import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://media.licdn.com/dms/image/v2/D4D03AQGZdfbmORJSFw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726497455491?e=1749081600&v=beta&t=pUyvt3pWCpY1vp8ywVPQQazluSbgcVGHs6Rk5Rk-Dj8"  />
                    <div className={styles.authorInfo}>
                        <strong>Michelangelo Morais</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='02 de abril às 16:00h' datetime="2025-04-02 16:00:00"> Publicado há 1h</time>            
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 {' '}<a href="">jane.design/doctorcare</a></p>
                <p> 
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentrário"></textarea>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>

    )
}