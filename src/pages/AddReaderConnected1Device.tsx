import { FunctionComponent, useCallback } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useNavigate } from "react-router-dom";
import styles from "./AddReaderConnected1Device.module.css";

const AddReaderConnected1Device: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeIcClick = useCallback(() => {
    navigate("/home-device-5-connected-ready");
  }, [navigate]);

  return (
    <div className={styles.addReaderConnected1Device}>
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
          <div className={styles.device1ConnectedParent}>
            <b className={styles.device1Connected}>DEVICE #1 CONNECTED</b>
            <div className={styles.frameWrapper2}>
              <div className={styles.image23Parent}>
                <img
                  className={styles.image23Icon}
                  alt=""
                  src="/image-23@2x.png"
                />
                <div className={styles.connectingGazelleMiniVideo}>
                  Connecting Gazelle-mini video
                </div>
              </div>
            </div>
            <div className={styles.covid19Test}>
              <b className={styles.connected}>CONNECTED</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReaderConnected1Device;
