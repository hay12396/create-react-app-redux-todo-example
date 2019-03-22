import axios from "axios";
import { getJwt } from "../helpers/storage-handler";

export default axios.create({
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache",
    "Authorization" :`Bearer ${getJwt()}`
  }
});
