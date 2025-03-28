import { formateCurrency } from "../scripts/utils/money.js";

if (formateCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}

if (formateCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("failed");
}

if (formateCurrency(2000.5) === "20.01") {
  console.log("passed");
} else {
  console.log("failed");
}
