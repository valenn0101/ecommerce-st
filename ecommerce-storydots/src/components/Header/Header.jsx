import React, {useEffect} from "react";
import styles from "./Header.module.css";
import { useAuthentication } from "@/utils/auth";
import Cookies from "js-cookie";

export default function Header() {
  const { handleLogout } = useAuthentication();
  const [isSessionOpen, setSessionOpen] = React.useState(false);

  useEffect(() => {
    const sessionId = Cookies.get("sessionId");
    setSessionOpen(!!sessionId);
  }, []);

  return (
    <div className={styles.header}>
      <h1>Ecommerce APP</h1>
      {isSessionOpen ? (
        <button onClick={handleLogout} className="btn btn-warning">Log out</button>
      ) : null}
    </div>
  );
}
