import os
import sys

TARGET_ATTRS = ('data-sr="', 'data-en="')

def scan_file(path: str) -> list[str]:
    hits = []
    with open(path, "r", encoding="utf-8", errors="replace") as f:
        for i, line in enumerate(f, start=1):
            for needle in TARGET_ATTRS:
                idx = line.find(needle)
                if idx != -1:
                    # broj " posle data-sr=" ili data-en="
                    tail = line[idx:]
                    q = tail.count('"')
                    # očekujemo tačno 2: otvaranje + zatvaranje
                    if q != 2:
                        hits.append(f"{path}:{i}  ({needle[:-1]}...)  quotes={q}\n{line.rstrip()}\n")
    return hits

def main(root: str):
    all_hits = []
    for base, _, files in os.walk(root):
        for fn in files:
            if fn.lower().endswith(".html"):
                p = os.path.join(base, fn)
                all_hits.extend(scan_file(p))

    if not all_hits:
        print("OK: Nema sumnjivih data-sr/data-en linija sa viškom navodnika.")
        return

    print("PROBLEM: Nađene linije sa viškom/maњkom navodnika u data-sr/data-en:\n")
    for h in all_hits:
        print(h)

if __name__ == "__main__":
    root = sys.argv[1] if len(sys.argv) > 1 else "."
    main(root)

