import { persistor } from "../redux/store";

export const handleReload = () => {
  persistor.flush().then(() => {
    window.location.reload();
  });
};
