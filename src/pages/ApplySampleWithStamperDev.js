import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ApplySampleWithStamperDev.module.css";

const ApplySampleWithStamperDev = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/wet-paper-b");
  }, [navigate]);

  const onNextButtonContainerClick = useCallback(() => {
    navigate("/fill-wells");
  }, [navigate]);

  return (
    <div className={styles.applySampleWithStamperDev}>
      <div className={styles.applySampleWithStamperTitl}>
        <div className={styles.applySampleWithStamperTitl1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} onClick={onHomeIcClick} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.applySampleWith}>
            APPLY SAMPLE WITH STAMPER
          </div>
          <div className={styles.settingsSvgrepoCom1} />
        </div>
      </div>
      <div className={styles.applySampleWithStamperDiv}>
        <div className={styles.applySampleWithStamperDiv1}>
          <img
            className={styles.applySampleWithStamperVide}
            src="/video3.gif"
          />
          <div
            className={styles.nextButton}
            onClick={onNextButtonContainerClick}
          >
            <button className={styles.nextButton1}>
              <div className={styles.next}>NEXT</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySampleWithStamperDev;
