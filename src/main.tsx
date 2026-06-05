import React from "react";

import "./index.css";
import { MonitorScreen } from "./components/MonitorScreen";
import { MonitorWidget } from "./components/MonitorWidget";

// 1. Exponemos React para que el Core pueda usarlo con nuestros componentes
(window as any).React = React;

// 2. Exportamos los componentes al namespace de tu módulo
// El ID debe coincidir exactamente con el que pusiste en el manifest.json
(window as any)["com.nexabook.modulo-pro"] = {
  MonitorScreen: MonitorScreen,
  MonitorWidget: MonitorWidget,
};

// NOTA: Ya NO llamamos a createRoot(...).render(...)
// porque eso lo hará Nexabook cuando el usuario abra tu módulo.
