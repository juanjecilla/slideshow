import { Scene } from 'beatdeck';
import { BOX, CAP } from '../assets';
import { Capture, Eyebrow, Line, Mono, useBeat } from '../ui';

const CLASSES = [
  'Compact        < 600 dp',
  'Medium         600 dp ≤ width < 840 dp',
  'Expanded       840 dp ≤ width < 1200 dp',
  'Large          1200 dp ≤ width < 1600 dp',
  'Extra-large    ≥ 1600 dp',
] as const;

const SOURCES = [
  'developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes',
  'developer.android.com/about/versions/16/behavior-changes-16',
  'developer.android.com/blog/posts/adaptive-development-for-the-expanding-android-ecosystem',
  'developer.android.com/develop/ui/compose/layouts/adaptive/list-detail',
  'developer.android.com/jetpack/androidx/releases/compose-material3-adaptive',
  'techcrunch.com/2021/05/18/android-now-powers-3b-devices',
] as const;

function Backup_() {
  const { at, gone } = useBeat();
  return (
    <>
      {/* 10.1 */}
      <Capture on={at(0)} out={gone(0)} x={349} y={125} w={BOX.clip.w} h={BOX.clip.h} src={CAP.videoFull} video label="Full demo backup" todo="Full demo video, in case the live run fails." />

      {/* 10.2 */}
      <Eyebrow on={at(1)} out={gone(1)} text="Window size classes · width" />
      <Mono on={at(1)} out={gone(1)} y={300} size={52} lines={CLASSES} />

      {/* 10.3 */}
      <Eyebrow on={at(2)} out={gone(2)} text="Android 16 and 17 · quotes" />
      <Line on={at(2)} out={gone(2)} y={230} size={38}
        text="“For apps targeting Android 16 (API level 36), orientation, resizability, and aspect ratio restrictions no longer apply on displays with smallest width >= 600dp.”" />
      <Line on={at(2)} out={gone(2)} y={470} size={38}
        text="“The opt-out is temporary and won't apply when targeting API level 37 in a future Android release.”" />
      <Line on={at(2)} out={gone(2)} y={650} size={38}
        text="“Android 17 (API level 37) sets a new quality baseline by removing that developer opt-out for orientation and resizability restrictions on large screen devices (sw > 600 dp).”" />

      {/* 10.4 */}
      <Eyebrow on={at(3)} out={gone(3)} text="Sources · checked 19 Oct 2026" />
      <Mono on={at(3)} out={gone(3)} y={230} size={28} lines={SOURCES} />
    </>
  );
}
export const Backup = () => <Scene index={9}><Backup_ /></Scene>;
