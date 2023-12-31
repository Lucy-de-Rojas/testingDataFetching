import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {useState, useEffect} from 'react';
import { DataModel } from '@/dataModel';


import DataDisplay from '@/components/dataDisplay';




export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {

    async function getData() {
      console.clear()

      let response = await fetch('/api/data');
      let dataFetched = await response.json();
      console.log('data:🟥', dataFetched);
      setData(dataFetched);

    }


    getData();


  },[]);







  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>data fetching</h1>


       <DataDisplay dataToDisplay={data} />

      </main>
    </>
  )
}
