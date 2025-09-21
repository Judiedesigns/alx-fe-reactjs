import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../components/Search";
import * as api from "../services/api";

jest.mock("../services/api");

describe("Search Component", () => {
  test("calls API and renders results", async () => {
    api.searchData.mockResolvedValue([{ id: 1, title: "Test Post" }]);

    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/search/i), {
      target: { value: "test" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    await waitFor(() => {
      expect(api.searchData).toHaveBeenCalledWith("test");
      expect(screen.getByText("Test Post")).toBeInTheDocument();
    });
  });
});
