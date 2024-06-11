import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WetPaperBDevice.module.css";

const WetPaperBDevice = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  return (
    <div className={styles.wetPaperBDevice1}>
      <div className={styles.wetPaperStatusBar}>
        <div className={styles.wetPaperTitleBar}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} onClick={onHomeIcClick} />
          </div>
          <div className={styles.wetPaper}>WET PAPER</div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.wetPaperBDiv}>
          <img
            className={styles.wetPaperBVideoGif}
            alt=""
            src="/wet-paper-b--video-gif@2x.png"
          />
          <div className={styles.startTimerButton}>
            <button className={styles.startTimerButton1}>
              <div className={styles.startTimer}>START TIMER</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WetPaperBDevice;
