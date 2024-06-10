import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HbVariantRunningDevice.module.css";

const HbVariantRunningDevice: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  return (
    <div className={styles.hbVariantRunningDevice1}>
      <div className={styles.hbVariantRunningTitleBar}>
        <div className={styles.hbVariantRunningTitleBar1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} onClick={onHomeIcClick} />
          </div>
          <div className={styles.hbVariantRunning}>Hb VARIANT RUNNING</div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.hbVariantRunningDiv}>
        <div className={styles.hbVariantRunningDiv1}>
          <img className={styles.hbVariantRunningVideoGif} src="/video5.gif" />
          <div className={styles.startTestButtonParent}>
            <div className={styles.startTestButton}>
              <button className={styles.startTestButton1}>
                <div className={styles.startTestButton2}>START TEST</div>
              </button>
            </div>
            <div className={styles.startTestButton}>
              <button className={styles.startTestButton1}>
                <div className={styles.startTestButton5}>
                  START ANOTHER TEST
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HbVariantRunningDevice;
