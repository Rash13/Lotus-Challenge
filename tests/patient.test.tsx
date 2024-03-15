import PatientPage from "../pages/patient";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("/pages/patient", () => {
  // test.todo('Page renders');
  // test.todo('Link to home page present');
  // test.todo('Patient summary present')
  // test.todo('Patient summary correctly displays homer information')

  test("Page renders", async () => {
    render(<PatientPage />);

    await waitFor(() => {
      screen.getByTestId("page-title");
    });
  });

  test("Link to home page present", async () => {
    render(<PatientPage />);

    fireEvent.click(screen.getByTestId("page-link"));
  });

  test("Patient summary present", async () => {
    render(<PatientPage />);

    await waitFor(() => {
      screen.getByTestId("patient-summary");
    });
   
  });

  test("Patient summary correctly displays homer information", async () => {
    render(<PatientPage />);

    await waitFor(() => {
      screen.getByText(/Homer Simpson/i);
    });
  });
});
