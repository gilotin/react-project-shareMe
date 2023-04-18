import { useState, useEffect } from "react";

import styles from "./AlertMessage.module.css";

export function AlertMessage(data) {
  const  message = Object.values(data)[0];

    return (
        <div className={styles["alert"]}>
            <h3>{message}</h3>
        </div>
    );
}
