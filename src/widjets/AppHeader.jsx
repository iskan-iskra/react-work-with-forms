import { AppNavList } from "@/components";
import { APP_NAVIGATION } from "@/const";
import { ThemeContext } from "@/context";
import { useContext } from "react";
import { Button, Container, Stack } from "react-bootstrap";

export const AppHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="pt-3 mb-2 bg-body-secondary">
      <Container>
        <Stack direction="horizontal" className="align-items-end" gap={3}>
          <AppNavList className="flex-grow-1" navList={APP_NAVIGATION} />
          <div className="vr mb-1" />
          <Button
            className="mb-2"
            variant="secondary"
            size="sm"
            onClick={toggleTheme}
          >
            {theme}
          </Button>
        </Stack>
      </Container>
    </header>
  );
};
