import { FunctionComponent, useCallback } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useNavigate } from "react-router-dom";
import styles from "./Covid19TestDevice.module.css";

const Covid19TestDevice: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  return (
    <div className={styles.covid19TestDevice1}>
      <div className={styles.covid19TestTitleBar}>
        <div className={styles.covid19TestTitleBar1}>
          <div className={styles.homePreviousPageButton}>
            <button className={styles.homeIc} onClick={onHomeIcClick} />
          </div>
          <div className={styles.covid19Test}>COVID-19 TEST</div>
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.covid19Testdiv}>
          <div className={styles.covid19TestStartProgressB}>
            <div className={styles.quickTest}>
              <div className={styles.patientIdCovid19}>
                PATIENT ID: Covid-19 DEMO
              </div>
              <div className={styles.quickTest1}>QUICK TEST</div>
            </div>
            <DotLottiePlayer
              className={styles.progressBarImg}
              autoplay
              src="/1_(1).json"
            />
          </div>
          <div className={styles.startTestButtonParent}>
            <div className={styles.startTestButton}>
              <button className={styles.startTestButton1}>
                <div className={styles.startTest}>START TEST</div>
              </button>
            </div>
            <div className={styles.startTestButton}>
              <button className={styles.startTestButton1}>
                <div className={styles.startTestButton4}>
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

export default Covid19TestDevice;
