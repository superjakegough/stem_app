import { Industry } from "../models/industry";

export function getIndustries(): Industry[] {
  try {
    return require("../store/industries.json");
  } catch (e) {
    console.error(e);
    return [];
  }
}