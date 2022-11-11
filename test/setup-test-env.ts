// From https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/

import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";
import "@testing-library/jest-dom";

expect.extend(matchers);
