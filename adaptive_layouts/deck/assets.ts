/**
 * Captures and clips of Muviss. `undefined` = not captured yet: the stage shows a dashed TODO box and the
 * audit lists it. To fill one: put the file in deck/assets/, import it here (Vite fingerprints and bundles it,
 * so it works offline) and replace its `undefined`. Capture steps: docs/RUNBOOK.md.
 */
export const CAP: Record<'railCompact' | 'railExpanded' | 'detailCompact' | 'detailExpanded' | 'videoRail' | 'videoDetail' | 'videoGrid' | 'videoKeys' | 'videoFull', string | undefined> = {
  railCompact: undefined,
  railExpanded: undefined,
  detailCompact: undefined,
  detailExpanded: undefined,
  videoRail: undefined,
  videoDetail: undefined,
  videoGrid: undefined,
  videoKeys: undefined,
  videoFull: undefined,
};
