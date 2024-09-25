import { APP_ROUTER_PATH } from "@/const";
import { useCallback } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AppErrorPage = () => {
  const navigate = useNavigate();

  const returnToMainPageHandler = useCallback(() => {
    navigate(APP_ROUTER_PATH.MAIN);
  }, [navigate]);

  return (
    <Container className="d-flex flex-column gap-3 h-100 justify-content-center align-items-center">
      <h1 className="mb-0">404: not found page</h1>
      <Button variant="outline-info" onClick={returnToMainPageHandler}>
        Return to main page
      </Button>
    </Container>
  );
};
