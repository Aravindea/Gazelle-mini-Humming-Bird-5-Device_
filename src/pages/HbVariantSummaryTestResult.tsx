import { FunctionComponent, useState, useCallback, useEffect } from "react";
import CurrentReport from "../components/CurrentReport";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./HbVariantSummaryTestResult.module.css";

const HbVariantSummaryTestResult: FunctionComponent = () => {
  const [isCurrentReportPopupOpen, setCurrentReportPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  const onLeftArrowPreviousPageIcClick = useCallback(() => {
    navigate("/hb-variant-running");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const openCurrentReportPopup = useCallback(() => {
    setCurrentReportPopupOpen(true);
  }, []);

  const closeCurrentReportPopup = useCallback(() => {
    setCurrentReportPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.hbVariantSummaryTestResult}>
        <div className={styles.hbVariantSummaryTitleBar}>
          <div className={styles.hbVariantSummaryTitleBar1}>
            <div className={styles.homePreviousPageButton}>
              <button className={styles.homeIc} onClick={onHomeIcClick} />
              <button
                className={styles.leftArrowPreviousPageIc}
                onClick={onLeftArrowPreviousPageIcClick}
              />
            </div>
            <div className={styles.hbVariantSummary}>Hb VARIANT SUMMARY</div>
          </div>
        </div>
        <div className={styles.testResultsDiv}>
          <div className={styles.testResultsDiv1}>
            <div className={styles.testResultsChart}>
              <div className={styles.phenotype}>
                <div className={styles.testResultsChart2}>
                  <div className={styles.patientIdPatient}>
                    PATIENT ID: Patient 7
                  </div>
                  <div className={styles.dividerLine} />
                </div>
                <div className={styles.testResultsBarChart}>
                  <div className={styles.barChart}>
                    <div className={styles.a2CEChart}>
                      <div className={styles.patientIdPatient}>A2, C, E</div>
                      <div className={styles.a2CEBar} data-animate-on-scroll />
                      <div className={styles.div} data-animate-on-scroll>
                        0%
                      </div>
                    </div>
                    <div className={styles.sChart}>
                      <div className={styles.s}>S</div>
                      <div className={styles.sBar} data-animate-on-scroll />
                      <div className={styles.div1} data-animate-on-scroll>
                        30%
                      </div>
                      <div
                        className={styles.sBarFilled}
                        data-animate-on-scroll
                      />
                    </div>
                    <div className={styles.a2CEChart}>
                      <div className={styles.patientIdPatient}>F</div>
                      <div className={styles.fBar} data-animate-on-scroll />
                      <div className={styles.div2} data-animate-on-scroll>
                        0%
                      </div>
                    </div>
                    <div className={styles.sChart}>
                      <div className={styles.s}>A</div>
                      <div className={styles.aBar} data-animate-on-scroll />
                      <div className={styles.div3}>70%</div>
                      <div
                        className={styles.aBarFilled}
                        data-animate-on-scroll
                      />
                    </div>
                  </div>
                  <div className={styles.dividerLine1} />
                  <div className={styles.phenotype}>
                    <div className={styles.as}>PHENOTYPE</div>
                    <div className={styles.as}>AS</div>
                  </div>
                </div>
                <div className={styles.phenotype}>
                  <div className={styles.dividerLine} />
                  <div className={styles.likelySickleCellTraitAs}>
                    <div className={styles.likelySickleCell}>
                      Likely sickle cell trait (AS)
                    </div>
                    <div className={styles.noteTransfusionCan}>
                      Note: Transfusion can impact results
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <div
                className={styles.printButton}
                onClick={openCurrentReportPopup}
              >
                <button className={styles.printButton1}>
                  <div className={styles.print}>PRINT</div>
                </button>
              </div>
              <button className={styles.printButton2}>
                <div className={styles.print}>Back to Home</div>
              </button>
              <button className={styles.continueButton}>
                <div className={styles.print}>CONTINUE</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isCurrentReportPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.75)"
          placement="Centered"
          onOutsideClick={closeCurrentReportPopup}
        >
          <CurrentReport onClose={closeCurrentReportPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HbVariantSummaryTestResult;
