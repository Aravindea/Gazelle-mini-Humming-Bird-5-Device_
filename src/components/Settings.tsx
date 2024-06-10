import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Settings.module.css";

export type SettingsType = {
  className?: string;
};

const Settings: FunctionComponent<SettingsType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  return (
    <div className={[styles.settings, className].join(" ")}>
      <div className={styles.homeTitleBar}>
        <div className={styles.homeTitleBar1}>
          <button className={styles.homeIc} onClick={onHomeIcClick} />
          <div className={styles.settings1}>SETTINGS</div>
          <img
            className={styles.settingsSvgrepoCom1Icon}
            alt=""
            src="/settingssvgrepocom-1.svg"
          />
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.settingsMenuButtons}>
          <div className={styles.settingsMenuButtons1}>
            <button className={styles.userButton}>
              <b className={styles.user}>USER</b>
            </button>
            <button className={styles.helpButton}>
              <b className={styles.user}>HELP</b>
            </button>
            <button className={styles.adminButton}>
              <b className={styles.user}>ADMIN</b>
            </button>
          </div>
          <div className={styles.reviewLogout}>
            <div className={styles.reviewButton}>
              <div className={styles.review}>REVIEW</div>
            </div>
            <button className={styles.logoutButton}>
              <div className={styles.logout}>LOGOUT</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
