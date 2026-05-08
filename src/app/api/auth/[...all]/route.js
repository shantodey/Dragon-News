// path to your auth file
import { auth } from "@/lib/auto";
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);