import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/user/:username", "routes/user.tsx")

] satisfies RouteConfig;
