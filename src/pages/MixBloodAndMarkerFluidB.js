import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MixBloodAndMarkerFluidB.module.css";

const MixBloodAndMarkerFluidB = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  return (
    <div className={styles.mixBloodAndMarkerFluidB}>
      <div className={styles.mixBloodAndMarkerFluidTit}>
        <div className={styles.mixBloodAndMarkerFluidTit1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} onClick={onHomeIcClick} />
          </div>
          <div className={styles.mixBloodAnd}>MIX BLOOD AND MARKER FLUID</div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.mixBloodAndMarkerFluidBD}>
          <img className={styles.mixBloodAndMarkerFluidBV} src="/video1b.gif" />
          <div className={styles.startTimerButton}>
            <div className={styles.startTimerButton1}>
              <div className={styles.startTimer}>START TIMER</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixBloodAndMarkerFluidB;
