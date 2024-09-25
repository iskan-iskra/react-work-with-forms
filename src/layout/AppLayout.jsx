import { AppHeader } from "@/widjets";
import { Outlet } from "react-router-dom";
import { appThemeProvider } from "@/hoc";
import "./app-layout.css";

const AppLayoutCore = () => (
  <>
    <AppHeader />
    <main>
      <Outlet />
    </main>
  </>
);

const AppLayoutWithThemeProvider = appThemeProvider(AppLayoutCore);

export const AppLayout = AppLayoutWithThemeProvider;
