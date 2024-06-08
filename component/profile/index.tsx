import styles from "./profile.module.css";
export default function Profile() {
  return (
    <div className={styles.Box}>
      <h1>Profile</h1>
      <p>My name is John Doe</p>
      <p>I am a software engineer</p>
    </div>
  );
}
