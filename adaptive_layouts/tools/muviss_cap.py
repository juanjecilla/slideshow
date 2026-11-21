"""Helpers to capture Muviss desktop for the talk (macOS). Used by hand, step by step; see docs/RUNBOOK.md.

Needs: Muviss desktop running from a throwaway worktree of `main` with an isolated `-Duser.home`
(so the real library never appears), Accessibility (System Events) and Screen Recording for the terminal.
Frames are captured one window-size at a time and composed on a neutral canvas with ffmpeg, so the desktop
behind the window never ends up in a clip.
"""
import subprocess, time, shutil
from pathlib import Path

X0, Y0 = 120, 80          # window origin on screen, in points
RETINA = 2


def osa(script):
    return subprocess.run(['osascript', '-e', script], check=True, capture_output=True, text=True).stdout.strip()


def front():
    osa('tell application "System Events" to tell process "java" to set frontmost to true')


def setwin(w, h, x=X0, y=Y0):
    front()
    osa(f'tell application "System Events" to tell process "java" to set position of window 1 to {{{x}, {y}}}')
    osa(f'tell application "System Events" to tell process "java" to set size of window 1 to {{{w}, {h}}}')


def getwin():
    return osa('tell application "System Events" to tell process "java" to get {position, size} of window 1')


def click(px, py):
    """Click at window-relative points. Real mouse events (move, down, up): System Events' own `click` is
    ignored by the Compose window after it has been resized a few times."""
    front()
    subprocess.run(['osascript', '-l', 'JavaScript', str(Path(__file__).with_name('muviss_clk.js')), str(X0 + px), str(Y0 + py)], check=True)


def keys(text):
    front()
    osa(f'tell application "System Events" to keystroke "{text}"')


def chord(key, mods):
    front()
    osa(f'tell application "System Events" to keystroke "{key}" using {{{mods}}}')


def grab(path, w, h, x=X0, y=Y0):
    subprocess.run(['screencapture', '-x', f'-R{x},{y},{w},{h}', str(path)], check=True)


def frames(outdir, widths, h, wait=0.4):
    """One PNG per window width (window anchored top-left); returns the list in order."""
    out = Path(outdir)
    shutil.rmtree(out, ignore_errors=True)
    out.mkdir(parents=True)
    for i, w in enumerate(widths):
        setwin(w, h)
        time.sleep(wait)
        grab(out / f'f{i:03d}.png', w, h)
    return sorted(out.glob('f*.png'))


def clip(framedir, dest, canvas_w, canvas_h, fps=10, bg='0xE8D3A9', scale_w=1650, pingpong=True):
    """Frames (shrinking then growing back) -> H.264 on a canvas of canvas_w x canvas_h points, no audio."""
    src = sorted(Path(framedir).glob('f*.png'))
    seq = Path(framedir) / 'seq'
    shutil.rmtree(seq, ignore_errors=True)
    seq.mkdir()
    order = src + src[-2:0:-1] if pingpong else src   # there and back, or as captured
    for i, f in enumerate(order):
        (seq / f's{i:04d}.png').symlink_to(f)
    pw, ph = canvas_w * RETINA, canvas_h * RETINA
    vf = f'pad={pw}:{ph}:0:0:color={bg},scale={scale_w}:-2,format=yuv420p'
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-framerate', str(fps), '-i', str(seq / 's%04d.png'),
                    '-vf', vf, '-c:v', 'libx264', '-crf', '24', '-preset', 'slow', '-an', '-movflags', '+faststart', str(dest)], check=True)
