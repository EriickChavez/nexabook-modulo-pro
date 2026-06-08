import "./index.css";
import { MonitorScreen } from "./components/MonitorScreen";
import { MonitorWidget } from "./components/MonitorWidget";

// Solo exponemos los componentes.
// Nexabook ya tiene su propio 'root' y él los renderizará donde quiera.
window["com.nexabook.modulo-pro"] = {
  MonitorScreen,
  MonitorWidget,
};

console.log("Módulo cargado y componentes expuestos a Nexabook.");
