import proEnv from "./production";
import devEnv from "./development";

let env;
if (process.env.NODE_ENV === "development") {
  env = devEnv;
} else if (process.env.NODE_ENV === "production") {
  env = proEnv;
}
console.log(env);
export default env;
