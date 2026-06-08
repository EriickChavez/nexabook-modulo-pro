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

// 3. Previsualización de desarrollo autónomo (solo si detectamos el div #root de nuestro index.html)
const rootEl = document.getElementById("root");
if (rootEl) {
  const ReactDOM = (window as any).ReactDOM;
  if (ReactDOM && ReactDOM.createRoot) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
      <React.StrictMode>
        <div style={{
          fontFamily: "system-ui, sans-serif",
          padding: "40px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
          color: "#f3f4f6",
          backgroundColor: "#0f172a",
          minHeight: "100vh",
          boxSizing: "border-box",
          borderRadius: "12px",
          textAlign: "left"
        }}>
          <header style={{
            borderBottom: "1px solid #334155",
            paddingBottom: "20px",
            marginBottom: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div>
              <h1 style={{ margin: 0, fontSize: "28px", fontWeight: "bold", color: "#f8fafc" }}>
                Nexabook Module Sandbox
              </h1>
              <p style={{ margin: "5px 0 0", color: "#94a3b8" }}>
                Previsualización autónoma del módulo <code>com.nexabook.modulo-pro</code>
              </p>
            </div>
            <span style={{
              backgroundColor: "#1e293b",
              color: "#38bdf8",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "600",
              border: "1px solid #0284c7"
            }}>
              Sandbox Mode
            </span>
          </header>

          <main style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }}>
            <section style={{
              backgroundColor: "#1e293b",
              padding: "24px",
              borderRadius: "8px",
              border: "1px solid #334155"
            }}>
              <h2 style={{ marginTop: 0, color: "#38bdf8", fontSize: "20px" }}>
                Componente: MonitorScreen (Pantalla Completa)
              </h2>
              <div style={{
                backgroundColor: "#0f172a",
                borderRadius: "6px",
                border: "1px solid #334155",
                marginTop: "15px"
              }}>
                <MonitorScreen />
              </div>
            </section>

            <section style={{
              backgroundColor: "#1e293b",
              padding: "24px",
              borderRadius: "8px",
              border: "1px solid #334155"
            }}>
              <h2 style={{ marginTop: 0, color: "#38bdf8", fontSize: "20px" }}>
                Componente: MonitorWidget (Widget)
              </h2>
              <div style={{
                backgroundColor: "#0f172a",
                borderRadius: "6px",
                border: "1px solid #334155",
                marginTop: "15px",
                maxWidth: "350px"
              }}>
                <MonitorWidget />
              </div>
            </section>
          </main>
        </div>
      </React.StrictMode>
    );
  }
}
