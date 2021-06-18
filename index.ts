#!/usr/bin/env node

// @ts-ignore
import { getRecordings } from "./src/parseFiles";

let recs = getRecordings('./toto');

console.log(recs);
