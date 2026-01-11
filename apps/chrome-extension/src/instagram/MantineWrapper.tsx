import React from "react";
import { MantineProvider } from "@mantine/core";
import { bondeeTheme } from "@bondee/branding";
import "@mantine/core/styles.css";
import "@bondee/branding/src/styles.css";

interface MantineWrapperProps {
  children: React.ReactNode;
}

export function MantineWrapper({ children }: MantineWrapperProps) {
  return <MantineProvider theme={bondeeTheme}>{children}</MantineProvider>;
}
