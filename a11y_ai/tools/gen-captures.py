#!/usr/bin/env python3
"""Generate deck/captures.ts (tool output) and deck/code.ts (snippets) from the real evidence, so no scene retypes it.

  python3 tools/gen-captures.py [--muviss ~/Projects/CodingPit/muviss-wt-a11y-main]

Tool output: reference/audit/**  (captured by docs/AUDIT.md's method).
Code: `git show <ref>:<path>` in the Muviss worktree. BEFORE = the last commit without our fixes.
"""
import json, os, re, subprocess, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
REF = ROOT / "reference/audit"
MUVISS = pathlib.Path(sys.argv[sys.argv.index("--muviss") + 1] if "--muviss" in sys.argv else "~/Projects/CodingPit/muviss-wt-a11y-main").expanduser()
BEFORE = "156587c8"   # chore(talk): debug build installs as .a11ytalk — the last commit before the a11y fixes


def lines(path, pat=None, start=None, count=None):
    out = [l.rstrip("\n") for l in (REF / path).read_text().splitlines()]
    out = [re.sub(r"^\s*\d+\s\s", "", l) for l in out]          # drop speak.py's numbering
    if pat:
        out = [l for l in out if re.search(pat, l)]
    if start is not None:
        i = next(i for i, l in enumerate(out) if re.search(start, l))
        out = out[i:i + (count or len(out))]
    return out


def audit_errors(path):
    return [re.sub(r"\s+", " ", l.strip()) for l in (REF / path).read_text().splitlines() if l.startswith("error")]


def unlabeled(path):
    return [l for l in audit_errors(path) if " unlabeled " in l]


def git_show(ref, path):
    return subprocess.run(["git", "-C", str(MUVISS), "show", f"{ref}:{path}"], capture_output=True, text=True, check=True).stdout


def snip(ref, path, start, count, dedent=True):
    src = git_show(ref, path).splitlines()
    i = next(i for i, l in enumerate(src) if re.search(start, l))
    block = src[i:i + count]
    if dedent:
        ind = min(len(l) - len(l.lstrip()) for l in block if l.strip())
        block = [l[ind:] for l in block]
    return "\n".join(block)


def tail(path, start, count=None):
    src = pathlib.Path(path).read_text().splitlines()
    i = next(i for i, l in enumerate(src) if re.search(start, l))
    return "\n".join(src[i:i + count])


UI = "feature/search/ui/src/commonMain/kotlin/com/codingpit/muviss/feature/search/ui/"
DS = "core/designsystem/src/commonMain/kotlin/com/codingpit/muviss/core/designsystem/component/"
cap = {
    "auditBroken": unlabeled("broken/search.audit.txt") + unlabeled("broken/settings.audit.txt") + unlabeled("main/detail2.audit.txt"),
    "speakSettingsBefore": lines("broken/settings.speak.txt", start=r"^Notifications$", count=3),
    "speakSettingsAfter": lines("main/settings.speak.txt", start=r"^Notifications,", count=1),
    "speakPostersBefore": lines("before-fix/posters.speak.txt", start=r"^Spider-Man: Brand New Day, button", count=4),
    "speakPostersAfter": lines("fixed/posters.speak.txt", start=r"^Spider-Man: Brand New Day, button", count=2),
    "speakTriageBefore": lines("before-fix/triage.speak.txt", start=r"^Matchbox the Movie, image", count=4),
    "speakTriageAfter": lines("fixed/triage.speak.txt", start=r"^Spider-Man: Brand New Day, image", count=2),
    "speakDetailBefore": lines("main/detail2.speak.txt", start=r"^Mark as watched", count=1),
    "auditDetailBefore": audit_errors("main/detail2.audit.txt"),
    "speakDetailAfter": lines("fixed/detail.speak.txt", start=r"^Mark as watched", count=1),
    "scan": [l for l in (REF / "tools/scan-compose.txt").read_text().splitlines() if l.strip()],
    "literals": [l for l in (REF / "tools/contrast-literals.txt").read_text().splitlines() if l.strip()],
}
def scan_short(path, rules):
    out = []
    for l in (REF / path).read_text().splitlines():
        m = re.match(r"(\w+)\s+([\w-]+)\s+(\w+)\s+(\S+?):(\d+)\s", l)
        if m and m.group(2) in rules:
            out.append(f"{m.group(1):<8}{m.group(2):<20}{m.group(4)}:{m.group(5)}")
    return out


cap["scanShort"] = scan_short("tools/scan-compose.txt", {"null-desc-clickable", "small-target"})
cap["literalsShort"] = [re.sub(r"^.*/(\w+\.kt:\d+):\s*", r"\1  ", l) for l in cap["literals"] if ".kt:" in l]

code = {
    "watchedBefore": snip(BEFORE, UI + "DetailScreen.kt", r"private fun MovieWatchedToggle", 4),
    "watchedAfter": snip("HEAD", UI + "DetailScreen.kt", r"internal fun MovieWatchedToggle", 8),
    "captionHidden": snip("HEAD", DS + "PosterCard.kt", r"Visual only: the poster already", 3),
    "navCap": snip("HEAD", "app/shared/src/commonMain/kotlin/com/codingpit/muviss/MuvissApp.kt", r"private fun CappedFontScale", 5),
    "triageHide": snip("HEAD", "feature/triage/ui/src/commonMain/kotlin/com/codingpit/muviss/feature/triage/ui/TriageScreen.kt", r"modifier = Modifier.cardDepth\(rememberDepth", 1),
    "gridCells": snip("HEAD", DS + "PosterGridCells.kt", r"GridCells.Adaptive\(minSize", 1).split("GridCells = ", 1)[-1],  # spotless joins the signature and the body on one line
    "shorten": snip("HEAD", "app/androidApp/src/main/kotlin/com/codingpit/muviss/ai/MlKitOnDeviceAi.kt", r"override suspend fun shorten", 8),
    "describe": snip("HEAD", "app/androidApp/src/main/kotlin/com/codingpit/muviss/ai/MlKitOnDeviceAi.kt", r"override suspend fun describeImage", 8),
    "clearTest": snip("HEAD", UI.replace("/commonMain/", "/jvmTest/") + "AccessibilityTest.kt", r"fun the_clear_search_button_keeps", 5),
    "clearButton": snip(BEFORE, UI + "SearchScreen.kt", r"IconButton\(onClick = \{ onQueryChange", 1),
    "atf": tail(os.path.expanduser("~/Projects/hephaestus/skills/a11y-fix/references/tests.md"), r"@get:Rule val rule = createAndroidComposeRule", 6),
    "agents": tail(os.path.expanduser("~/Projects/hephaestus/snippets/AGENTS-a11y.md"), r"^- Every `Image`", 3),
}

hdr = "// GENERATED by tools/gen-captures.py from reference/audit/ and the Muviss worktree. Do not edit.\n"
(ROOT / "deck/captures.ts").write_text(hdr + "export const CAP = " + json.dumps(cap, indent=2, ensure_ascii=False) + " as const;\n")
(ROOT / "deck/code.ts").write_text(hdr + "export const CODE = " + json.dumps(code, indent=2, ensure_ascii=False) + " as const;\n")
print("wrote deck/captures.ts and deck/code.ts:", {k: len(v) for k, v in cap.items()})
