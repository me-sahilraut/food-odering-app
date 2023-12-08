import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";
import Body from "../Body";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { RESTAURANT_DATA } from "../../mockData/fetch";
import Shimmer from "../Shimmer";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmerUi = body.getByTestId("shimmer");
  expect(shimmerUi.children.length).toBe(9);
  console.log(Shimmer);
});

test("Restaurant data on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const restaurantUi = body.getByTestId("res-list");
  expect(restaurantUi.children.length).toBe(15);
  console.log(Shimmer);
});

test("Restaurant data on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const restaurantUi = body.getByTestId("res-list");

  expect(restaurantUi.children.length).toBe(3);
});
