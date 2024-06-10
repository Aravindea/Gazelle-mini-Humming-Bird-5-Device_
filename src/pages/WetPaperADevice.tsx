import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WetPaperADevice.module.css";

const WetPaperADevice: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/mix-blood-and-marker-fluid-b");
  }, [navigate]);

  const onStartTimerButtonContainerClick = useCallback(() => {
    navigate("/wet-paper-b");
  }, [navigate]);

  return (
    <div className={styles.wetPaperADevice1}>
      <div className={styles.wetPaperTitleBar}>
        <div className={styles.wetPaperTitleBar1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} onClick={onHomeIcClick} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.wetPaper}>WET PAPER</div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.wetPaperDiv}>
          <img className={styles.wetPaperAVideoGif} src="/video2a.gif" />
          <div
            className={styles.startTimerButton}
            onClick={onStartTimerButtonContainerClick}
          >
            <button className={styles.startTimerButton1}>
              <div className={styles.startTimer}>START TIMER</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WetPaperADevice;
