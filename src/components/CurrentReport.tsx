import { FunctionComponent } from "react";
import styles from "./CurrentReport.module.css";

export type CurrentReportType = {
  className?: string;
  onClose?: () => void;
};

const CurrentReport: FunctionComponent<CurrentReportType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={[styles.currentReport, className].join(" ")}>
      <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
    </div>
  );
};

export default CurrentReport;
