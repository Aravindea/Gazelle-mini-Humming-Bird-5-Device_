import { FunctionComponent, useCallback } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useNavigate } from "react-router-dom";
import styles from "./HomeDevice1SelectTest.module.css";

const HomeDevice1SelectTest: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  const onSettingsMenuButtonsContainerClick = useCallback(() => {
    navigate("/hb-variant-patient-info");
  }, [navigate]);

  const onHelpButton1Click = useCallback(() => {
    navigate("/covid19-patient-info");
  }, [navigate]);

  const onCancelButtonClick = useCallback(() => {
    // Please sync "Home_device 1 connected_ready" to the project
  }, []);

  return (
    <div className={styles.homeDevice1SelectTest}>
      <div className={styles.homeTitleBar}>
        <div className={styles.homeTitleBar1}>
          <button className={styles.homeIc} onClick={onHomeIcClick} />
          <div className={styles.selectTest}>SELECT TEST</div>
          <img
            className={styles.settingsSvgrepoCom1Icon}
            alt=""
            src="/settingssvgrepocom-1.svg"
          />
        </div>
      </div>
      <div className={styles.desktop1}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>1</div>
                <div className={styles.readyParent}>
                  <div className={styles.selectTest}>READY</div>
                  <DotLottiePlayer
                    className={styles.frameChild}
                    autoplay
                    src="/frame_23918.json"
                    loop
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>2</div>
                <div className={styles.readyParent}>
                  <div className={styles.selectTest}>READY</div>
                  <DotLottiePlayer
                    className={styles.frameChild}
                    autoplay
                    src="/frame_23918.json"
                    loop
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.parent}>
                <div className={styles.div}>3</div>
                <div className={styles.readyParent}>
                  <div className={styles.selectTest}>READY</div>
                  <DotLottiePlayer
                    className={styles.frameChild}
                    autoplay
                    src="/frame_23918.json"
                    loop
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>4</div>
                <div className={styles.readyParent}>
                  <div className={styles.selectTest}>READY</div>
                  <DotLottiePlayer
                    className={styles.frameChild}
                    autoplay
                    src="/frame_23918.json"
                    loop
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.settingsMenuButtonsParent}>
              <div
                className={styles.settingsMenuButtons}
                onClick={onSettingsMenuButtonsContainerClick}
              >
                <div className={styles.settingsMenuButtons1}>
                  <button className={styles.helpButton}>
                    <b className={styles.hbVariantTest}>Hb VARIANT TEST</b>
                  </button>
                </div>
                <div className={styles.reviewLogout}>
                  <div className={styles.reviewButton}>
                    <div className={styles.review}>REVIEW</div>
                  </div>
                  <button className={styles.logoutButton}>
                    <div className={styles.logout}>LOGOUT</div>
                  </button>
                </div>
              </div>
              <div className={styles.settingsMenuButtons2}>
                <div className={styles.settingsMenuButtons1}>
                  <button
                    className={styles.helpButton1}
                    onClick={onHelpButton1Click}
                  >
                    <b className={styles.hbVariantTest}>COVID-19</b>
                  </button>
                </div>
                <div className={styles.reviewLogout}>
                  <div className={styles.reviewButton}>
                    <div className={styles.review}>REVIEW</div>
                  </div>
                  <button className={styles.logoutButton}>
                    <div className={styles.logout}>LOGOUT</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.parent}>
                <div className={styles.div}>5</div>
                <div className={styles.readyParent}>
                  <div className={styles.selectTest}>READY</div>
                  <DotLottiePlayer
                    className={styles.frameChild}
                    autoplay
                    src="/frame_23918.json"
                    loop
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cancelButtonWrapper}>
          <button className={styles.cancelButton} onClick={onCancelButtonClick}>
            <div className={styles.cancel}>CANCEL</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeDevice1SelectTest;
