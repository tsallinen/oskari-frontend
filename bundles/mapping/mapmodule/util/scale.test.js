import { getZoomLevelHelper, isInScale } from './scale';

describe('isInScale function', () => {
    test('returns true when scale limits are undefined', () => {
        expect(isInScale(100, undefined, undefined)).toEqual(true);
    });
    test('returns true when scale limits are null', () => {
        expect(isInScale(100, null, null)).toEqual(true);
    });
    test('returns true when scale limits are -1', () => {
        expect(isInScale(100, -1, -1)).toEqual(true);
    });
    test('returns true with larger minscale', () => {
        expect(isInScale(100, 200, undefined)).toEqual(true);
    });
    test('returns true with same minscale', () => {
        expect(isInScale(100, 100, undefined)).toEqual(true);
    });
    test('returns false with smaller minscale', () => {
        expect(isInScale(100, 99, undefined)).toEqual(false);
    });
    test('returns true with larger maxscale', () => {
        expect(isInScale(100, undefined, 50)).toEqual(true);
    });
    test('returns true with same maxscale', () => {
        expect(isInScale(50, undefined, 50)).toEqual(true);
    });
    test('returns false with larger maxscale', () => {
        expect(isInScale(10, undefined, 50)).toEqual(false);
    });
    test('returns true when between scale limits', () => {
        expect(isInScale(100, 200, 50)).toEqual(true);
    });
    test('returns false when more than scale limits', () => {
        expect(isInScale(1000, 200, 50)).toEqual(false);
    });
    test('returns false when less than scale limits', () => {
        expect(isInScale(10, 200, 50)).toEqual(false);
    });
});

describe('getZoomLevelHelper function', () => {
    test('throws TypeError if scales are not given as param', () => {
        const t = () => {
            getZoomLevelHelper();
        };
        expect(t).toThrow(TypeError);
    });

    const scales = [2048, 1024, 512, 256, 128];
    const helper = getZoomLevelHelper(scales);

    describe('getMaxZoom function', () => {
        test('returns -1 as zoom level with undefined scale', () => {
            expect(helper.getMaxZoom(undefined)).toEqual(-1);
        });
        test('returns last zoom level if matching the last scale', () => {
            expect(helper.getMaxZoom(128)).toEqual(scales.length - 1);
        });
        test('returns last zoom level if between the last two scales', () => {
            expect(helper.getMaxZoom(200)).toEqual(scales.length - 1);
        });
        test('returns -1 if after last scale value', () => {
            expect(helper.getMaxZoom(100)).toEqual(-1);
        });
        test('returns 0 if before first scale', () => {
            expect(helper.getMaxZoom(3000)).toEqual(0);
        });
    });

    describe('getMinZoom function', () => {
        test('returns -1 as zoom level with undefined scale', () => {
            expect(helper.getMinZoom(undefined)).toEqual(-1);
        });
        test('returns first zoom level if matching the first scale', () => {
            expect(helper.getMinZoom(2048)).toEqual(0);
        });
        test('returns last zoom level if matching the last scale', () => {
            expect(helper.getMinZoom(128)).toEqual(scales.length - 1);
        });
        test('returns second zoom level if between the first two scales', () => {
            expect(helper.getMinZoom(1500)).toEqual(1);
        });
        test('returns 0 if before first scale value', () => {
            expect(helper.getMinZoom(3000)).toEqual(0);
        });
    });
});
