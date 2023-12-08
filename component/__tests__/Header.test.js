import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";
test("Load Logo on rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo");

  console.log(logo);

  expect(logo[0].src).toBe(
    "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
  );
});

test("User Login on rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");

  console.log(onlineStatus);

  expect(onlineStatus.innerHTML).toBe("Login");
});

test("Cart should Have 0 items on rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cartItems = header.getByTestId("cart-items");

  console.log(cartItems);

  expect(cartItems.innerHTML).toBe("CART-0items");
});
