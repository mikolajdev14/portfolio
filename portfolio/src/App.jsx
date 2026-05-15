import { MainPage } from "./components/MainPage/MainPage";
import { CustomCursor } from "./components/CustomCursor/CustomCursor";
import "./App.css";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <CustomCursor />
      <MainPage />
    </div>
  );
}
