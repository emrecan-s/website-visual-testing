import "expect-puppeteer";
import {configureToMatchImageSnapshot} from "jest-image-snapshot";


//For email credentials
require('dotenv').config()


//change the treshold to avoid false positives

const toMatchImageSnapshot = configureToMatchImageSnapshot({
	customSnapshotsDir: './__output__/image_snapshots',
	customDiffDir: './__output__/image_diff/',
	 comparisonMethod: 'ssim',
    failureThreshold: 0.01,
    failureThresholdType: 'percent'
});
expect.extend({
	toMatchImageSnapshot
});

jest.setTimeout(30000);