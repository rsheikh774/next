import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
  }

let users = await getUsers();
   

  return (
    <main className={styles.main}>
      {users.map((user: any)=>{
        return(
          <div key={user.id} className={styles.card}>
          <h2 className={styles.name}>{user.name}</h2>
          <p className={styles.email}>{user.email}</p>
          <p className={styles.phone}>{user.phone}</p>
        </div>
        )
      })}
    </main>
  );
}
