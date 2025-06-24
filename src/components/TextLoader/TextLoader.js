import { ReactComponent as Spinner } from "../../assests/loader.svg";

const LoadingSpinner = ({ size = 40 }) => (
  <Spinner width={size} height={size} aria-label="Loading" />
);

export default LoadingSpinner;
