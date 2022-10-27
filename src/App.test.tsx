import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createMockStore } from "redux-test-utils";

const emptyState = {
  list: { items: [] },
};

const state = {
  list: {
    items: [
      {
        id: Math.floor(Math.random() * 10000000),
        name: "New card",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
      },
      {
        id: Math.floor(Math.random() * 10000000),
        name: "New card",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
      },
    ],
  },
};

const emptyStore = createMockStore(emptyState);
const store = createMockStore(state);

describe("Render App", () => {
  it("Render loading page", () => {
    render(
      <Provider store={emptyStore}>
        <App />
      </Provider>
    );
    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
  });

  it("Render list page", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const list = screen.getByTestId("list");
    const card = screen.getAllByTestId("card");
    expect(list).toBeInTheDocument();
    expect(card).toHaveLength(2);
  });

  it("Render add new card", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const addCard = screen.getByTestId("addCard");
    expect(addCard).toBeInTheDocument();

    fireEvent.click(addCard);
  });
});
