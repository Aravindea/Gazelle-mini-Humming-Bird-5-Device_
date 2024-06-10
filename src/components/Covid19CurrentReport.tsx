import { FunctionComponent } from "react";
import styles from "./Covid19CurrentReport.module.css";

export type Covid19CurrentReportType = {
  className?: string;
  onClose?: () => void;
};

const Covid19CurrentReport: FunctionComponent<Covid19CurrentReportType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={[styles.covid19CurrentReport, className].join(" ")}>
      <img className={styles.image51Icon} alt="" src="/image-51@2x.png" />
    </div>
  );
};

export default Covid19CurrentReport;
