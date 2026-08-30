#!/usr/bin/env python3
"""Regenerate the self-hosted subset fonts in public/fonts/.

Not part of `npm run build` — run it by hand only when the font choices change or a verse
adds a new Devanagari glyph:

    pip install "fonttools[woff]" brotli
    python scripts/subset-fonts.py

It downloads the current Google Fonts woff2 sources and subsets them:
  - Inter            -> variable (wght 400-600), Latin only
  - Noto Serif Devanagari 400 -> only the Devanagari codepoints used in src/data/verses.ts

The matching @font-face rules live in src/index.css.
"""
import pathlib
import urllib.request
from fontTools import subset

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "fonts"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/151.0.0.0 Safari/537.36"}

INTER_SRC = "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2"
NSD_SRC = (
    "https://fonts.gstatic.com/s/notoserifdevanagari/v34/"
    "x3dNcl3IZKmUqiMk48ZHXJ5jwU-DZGRSaQ4Hh2dGyFzPLcQPVbnRH-xEMqTN.woff2"
)

LATIN = (
    list(range(0x0000, 0x0100))
    + [0x0131, 0x0152, 0x0153, 0x2013, 0x2014, 0x2018, 0x2019, 0x201C, 0x201D,
       0x2020, 0x2021, 0x2026, 0x2032, 0x2033, 0x20AC, 0x2122, 0x2192, 0x2212, 0xFEFF, 0xFFFD]
)


def fetch(url: str, dest: pathlib.Path) -> None:
    req = urllib.request.Request(url, headers=UA)
    dest.write_bytes(urllib.request.urlopen(req).read())


def do(src: pathlib.Path, dst: pathlib.Path, codepoints) -> None:
    subset.main([
        str(src), f"--output-file={dst}", "--flavor=woff2",
        "--unicodes=" + ",".join(f"{c:04X}" for c in sorted(set(codepoints))),
        "--layout-features=*", "--no-hinting", "--desubroutinize",
    ])
    print(f"{dst.name}: {dst.stat().st_size:,} bytes")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    tmp = ROOT / ".fonttmp"
    tmp.mkdir(exist_ok=True)

    verses = (ROOT / "src" / "data" / "verses.ts").read_text(encoding="utf-8")
    deva = [
        ord(c) for c in verses
        if 0x0900 <= ord(c) <= 0x097F or 0x1CD0 <= ord(c) <= 0x1CFF or ord(c) in (0x200C, 0x200D)
    ]
    print(f"{len(set(deva))} distinct Devanagari codepoints in verses.ts")

    fetch(INTER_SRC, tmp / "inter.woff2")
    fetch(NSD_SRC, tmp / "nsd.woff2")
    do(tmp / "inter.woff2", OUT / "inter-latin.woff2", LATIN)
    do(tmp / "nsd.woff2", OUT / "noto-serif-devanagari-400.woff2", deva)


if __name__ == "__main__":
    main()
