import { useCallback } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useNavigate } from "react-router-dom";
import styles from "./AddReader1Device.module.css";

const AddReader1Device = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  const onCovid19TestContainerClick = useCallback(() => {
    navigate("/add-reader-connecting");
  }, [navigate]);

  const onCancelButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.addReader1Device}>
      <div className={styles.homeTitleBar}>
        <div className={styles.homeTitleBar1}>
          <button className={styles.homeIc} onClick={onHomeIcClick} />
          <div className={styles.addReader}>ADD READER</div>
          <img
            className={styles.settingsSvgrepoCom1Icon}
            alt=""
            src="/settingssvgrepocom-1.svg"
          />
        </div>
      </div>
      <div className={styles.bodyScreen}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <div className={styles.div}>1</div>
                <div className={styles.readyParent}>
                  <div className={styles.addReader}>READY</div>
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
                  <div className={styles.addReader}>READY</div>
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
                  <div className={styles.addReader}>READY</div>
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
                  <div className={styles.addReader}>READY</div>
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
          <div className={styles.addDevice1Parent}>
            <b className={styles.addDevice1}>{`ADD DEVICE #1 `}</b>
            <div className={styles.frameWrapper2}>
              <div className={styles.image23Parent}>
                <img
                  className={styles.image23Icon}
                  alt=""
                  src="/image-23@2x.png"
                />
                <div className={styles.gazelleMiniVideo}>
                  Gazelle-mini video
                </div>
              </div>
            </div>
            <div
              className={styles.covid19Test}
              onClick={onCovid19TestContainerClick}
            >
              <b className={styles.addReader1}>ADD READER</b>
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

export default AddReader1Device;
