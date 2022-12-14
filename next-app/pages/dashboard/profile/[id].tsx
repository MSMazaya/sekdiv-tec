import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// "/"
const Test: NextPage = () => {
    const router = useRouter()
    const { id } = router.query;
    const [name, setName] = useState('');

    useEffect(() => {
        async function getData() {
            const data = await fetch(`http://localhost:3001/api/hello`).then(res => res.json())
            setName(data.name)
        }
        getData()
    })
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="test">INI PAGE DASHBOARD PROFILE {name}</div>
        </div>
    )
}

export default Test
