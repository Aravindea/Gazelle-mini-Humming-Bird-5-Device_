import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Covid19ConfirmPatientInfo.module.css";

const Covid19ConfirmPatientInfo: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/covid19-patient-info");
  }, [navigate]);

  const onEditButtonClick = useCallback(() => {
    navigate("/covid19-patient-info");
  }, [navigate]);

  const onContinueButtonClick = useCallback(() => {
    navigate("/covid19-prepare-sample");
  }, [navigate]);

  return (
    <div className={styles.covid19ConfirmPatientInfo}>
      <div className={styles.covid19ConfirmPatientInfo1}>
        <div className={styles.covid19ConfirmPatientInfo2}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} onClick={onHomeIcClick} />
            <button
              className={styles.leftArrowPreviousPageIc}
              onClick={onLeftArrowPreviousPageIcClick}
            />
          </div>
          <div className={styles.confirmPatientInfo}>CONFIRM PATIENT INFO</div>
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.confirmPatientInfo1}>
          <div className={styles.confirmPatientInfoCard}>
            <div className={styles.confirmPatientInfoCardDeta}>
              <div className={styles.titles}>
                <div className={styles.patientId}>PATIENT ID</div>
                <div className={styles.patientId}>TEST MODE</div>
                <div className={styles.patientFirstName}>
                  PATIENT FIRST NAME
                </div>
                <div className={styles.patientId}>AGE</div>
                <div className={styles.patientId}>GENDER</div>
              </div>
              <div className={styles.colons}>
                <div className={styles.div}>:</div>
                <div className={styles.div1}>:</div>
                <div className={styles.div2}>:</div>
                <div className={styles.div3}>:</div>
                <div className={styles.div4}>:</div>
              </div>
              <div className={styles.details}>
                <div className={styles.patientId}>--------------------</div>
                <div className={styles.patientId}>--------------------</div>
                <div className={styles.patientId}>--------------------</div>
                <div className={styles.patientId}>--------------------</div>
                <div className={styles.patientId}>---------------------</div>
              </div>
            </div>
          </div>
          <div className={styles.editContinueButton}>
            <button className={styles.editButton} onClick={onEditButtonClick}>
              <div className={styles.edit}>EDIT</div>
            </button>
            <button
              className={styles.editButton}
              onClick={onContinueButtonClick}
            >
              <div className={styles.edit}>CONTINUE</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covid19ConfirmPatientInfo;
