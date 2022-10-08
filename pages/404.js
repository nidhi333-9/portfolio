import { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import styles from "../styles/Home.module.css"
const NotFound = () => {
    const router = useRouter()
    useEffect(() => {

        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [])
    return (
        <div className={styles.notfound}>
            <h1>Ooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>HomePage</a></Link> </p>
        </div>
    )
}

export default NotFound;