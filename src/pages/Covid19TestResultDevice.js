import { useState, useCallback } from "react";
import Covid19CurrentReport from "../components/Covid19CurrentReport";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Covid19TestResultDevice.module.css";

const Covid19TestResultDevice = () => {
  const [isCovid19CurrentReportOpen, setCovid19CurrentReportOpen] =
    useState(false);
  const [isCovid19CurrentReport1Open, setCovid19CurrentReport1Open] =
    useState(false);
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/covid19-test");
  }, [navigate]);

  const openCovid19CurrentReport = useCallback(() => {
    setCovid19CurrentReportOpen(true);
  }, []);

  const closeCovid19CurrentReport = useCallback(() => {
    setCovid19CurrentReportOpen(false);
  }, []);

  const openCovid19CurrentReport1 = useCallback(() => {
    setCovid19CurrentReport1Open(true);
  }, []);

  const closeCovid19CurrentReport1 = useCallback(() => {
    setCovid19CurrentReport1Open(false);
  }, []);

  return (
    <>
      <div className={styles.covid19TestResultDevice1}>
        <div className={styles.covid19TestResultsTitleBa}>
          <div className={styles.covid19TestResultsTitleBa1}>
            <div className={styles.homePreviousPageButton}>
              <button className={styles.homeIc} onClick={onHomeIcClick} />
              <button
                className={styles.leftArrowPreviousPageIc}
                onClick={onLeftArrowPreviousPageIcClick}
              />
            </div>
            <div className={styles.covid19TestResults}>
              COVID-19 TEST RESULTS
            </div>
          </div>
        </div>
        <div className={styles.bodyScreen}>
          <div className={styles.covid19TestResultsDiv}>
            <img
              className={styles.covid19TestResultsImg}
              alt=""
              src="/covid19-test-results-img@2x.png"
            />
            <div className={styles.printButton}>
              <div className={styles.printButton1}>
                <button
                  className={styles.printButton2}
                  onClick={openCovid19CurrentReport}
                >
                  <div className={styles.print}>PRINT</div>
                </button>
              </div>
              <button
                className={styles.printButton3}
                onClick={openCovid19CurrentReport1}
              >
                <div className={styles.print}>Back to Home</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isCovid19CurrentReportOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.75)"
          placement="Centered"
          onOutsideClick={closeCovid19CurrentReport}
        >
          <Covid19CurrentReport onClose={closeCovid19CurrentReport} />
        </PortalPopup>
      )}
      {isCovid19CurrentReport1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.75)"
          placement="Centered"
          onOutsideClick={closeCovid19CurrentReport1}
        >
          <Covid19CurrentReport onClose={closeCovid19CurrentReport1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Covid19TestResultDevice;
