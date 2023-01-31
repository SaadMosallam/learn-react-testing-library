// setupServer is used to intercept requests made to the route handler created
// we use msw/node because our code will run in a node environment
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const mockServer = setupServer(...handlers);
