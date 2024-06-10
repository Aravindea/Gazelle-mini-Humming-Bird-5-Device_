import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FillWellsDevice.module.css";

const FillWellsDevice: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/apply-sample-with-stamper");
  }, [navigate]);

  return (
    <div className={styles.fillWellsDevice1}>
      <div className={styles.fillWellsTitleBar}>
        <div className={styles.fillWellsTitleBar1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} onClick={onHomeIcClick} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.fillWells}>FILL WELLS</div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.fillWellsDiv}>
        <div className={styles.fillWellsDiv1}>
          <img className={styles.fillWellsVideoGif} src="/video4.gif" />
          <div className={styles.startTestButton}>
            <button className={styles.startTest}>
              <div className={styles.startTest1}>START TEST</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillWellsDevice;
