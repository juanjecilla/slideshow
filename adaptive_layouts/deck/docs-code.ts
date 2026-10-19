/**
 * Code that is NOT from Muviss: the original deck's snippets (S16) and examples copied from the official
 * Android documentation (docs/research.md R2, R5, R10). Each is labelled on stage with its origin.
 * Muviss's own snippets live in the generated deck/code.ts.
 */

/** Original deck, slide 16 (image of a resources file). */
export const ORIGINAL = {
  isTablet: [
    '<resources>',
    '    <bool name="isTablet">true</bool>',
    '</resources>',
  ],
  orientation: ['android:screenOrientation="portrait"'],
} as const;

/** R2 · developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes (updated 2026-09-22). */
export const DOCS = {
  largeXl: [
    'currentWindowAdaptiveInfo(supportLargeAndXLargeWidth = true).windowSizeClass',
  ],
  /** R5 · developer.android.com/about/versions/16/behavior-changes-16 */
  optOut: [
    '<application ...>',
    '  <property',
    '      android:name="android.window.PROPERTY_COMPAT_ALLOW_RESTRICTED_RESIZABILITY"',
    '      android:value="true" />',
    '</application>',
  ],
  /** R10 · developer.android.com/develop/ui/compose/layouts/adaptive/list-detail (updated 2026-10-16). */
  listDetail: [
    'NavigableListDetailPaneScaffold(',
    '    navigator = navigator,',
    '    listPane = {',
    '        AnimatedPane {',
    '            ListContent(',
    '                // …',
    '                onWordClick = { word ->',
    '                    scope.launch {',
    '                        navigator.navigateTo(ListDetailPaneScaffoldRole.Detail, word)',
    '                    }',
    '                },',
    '                // …',
    '            )',
    '        }',
    '    },',
    '    detailPane = { … },',
  ],
  listDetailBack: [
    'navigator.navigateBack(',
    '    backNavigationBehavior = BackNavigationBehavior.PopUntilScaffoldValueChange',
    ')',
  ],
  deps: [
    'implementation("androidx.compose.material3.adaptive:adaptive")',
    'implementation("androidx.compose.material3.adaptive:adaptive-layout")',
    'implementation("androidx.compose.material3.adaptive:adaptive-navigation")',
  ],
} as const;
