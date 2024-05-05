import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
const Comments = () => {
	const status = "authenticated";
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Comments</h1>
			{status === "authenticated" ? (
				<div className={styles.write}>
					<textarea placeholder="Write a Comment..." className={styles.input} />
					<button className={styles.button}>Send</button>
				</div>
			) : (
				<Link href="/login">Login to write comments</Link>
			)}
			<div className={styles.comments}>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
						<div className={styles.userInfo}>
							<span className={styles.username}>John Doe</span>
							<span className={styles.date}>10.10.2023</span>
						</div>
					</div>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eveniet vitae perferendis officiis quo et magni aut recusandae, facere dignissimos iure non. Praesentium, beatae amet. Ipsum ratione eum error quam!</p>
				</div>
			</div>
		</div>
	);
};

export default Comments;