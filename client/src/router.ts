import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Pages } from "./pages";

export const ROUTES = {
  COLLATERAL_FORM: "collateral-form",
  INDEX: "/",
  SPLAT: "*",
};

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.INDEX,
  component: Pages.CreditCardPage,
});

const splatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.SPLAT,
  component: Pages.SplatPage,
});

const routeTree = rootRoute.addChildren([indexRoute, splatRoute]);

export const router = createRouter({ routeTree });
