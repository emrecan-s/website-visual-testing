import "expect-puppeteer";
import { configureToMatchImageSnapshot } from "jest-image-snapshot";
//For email credentials
require('dotenv').config()
const toMatchImageSnapshot = configureToMatchImageSnapshot({
    customSnapshotsDir: './__output__/image_snapshots',
    customDiffDir: './__output__/image_diff/',
    customDiffConfig: {
        "threshold": 0.05
    }
});
expect.extend({ toMatchImageSnapshot });

jest.setTimeout(30000);