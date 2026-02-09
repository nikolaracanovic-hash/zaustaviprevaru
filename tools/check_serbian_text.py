import json
import os
import re
import sys


EXTENSIONS = {".html", ".js", ".md", ".json"}

RE_DATA_SR_DQ = re.compile(r'data-(sr|cyr)\s*=\s*"([^"]*)"')
RE_DATA_SR_SQ = re.compile(r"data-(sr|cyr)\s*=\s*'([^']*)'")
RE_JS_SR_DQ = re.compile(r'(?<![\w-])(sr|cyr)\s*:\s*"([^"]*)"')
RE_JS_SR_SQ = re.compile(r"(?<![\w-])(sr|cyr)\s*:\s*'([^']*)'")

RE_LATIN = re.compile(r"[A-Za-zČĆĐŠŽčćđšž]")
RE_CYRILLIC = re.compile(r"[\u0400-\u04FF]")
RE_SH_DJ = re.compile(r"\b(sh|dj)\b", re.IGNORECASE)
RE_CH = re.compile(r"\bch\b", re.IGNORECASE)


def iter_files(root):
    for base, dirs, files in os.walk(root):
        dirs[:] = [d for d in dirs if d not in {".git", ".pytest_cache", "__pycache__"}]
        for name in files:
            _, ext = os.path.splitext(name)
            if ext.lower() in EXTENSIONS:
                yield os.path.join(base, name)


def find_strings(text):
    patterns = (RE_DATA_SR_DQ, RE_DATA_SR_SQ, RE_JS_SR_DQ, RE_JS_SR_SQ)
    for pattern in patterns:
        for match in pattern.finditer(text):
            lang = match.group(1)
            value = match.group(2)
            yield match.start(2), lang, value


def detect_issues(value):
    issues = []
    if RE_SH_DJ.search(value):
        issues.append("sh_dj")
    if RE_LATIN.search(value) and RE_CYRILLIC.search(value):
        issues.append("mixed_script")
    if RE_CH.search(value):
        issues.append("ch")
    return issues


def snippet(value, limit=120):
    if len(value) <= limit:
        return value
    return value[:limit - 1] + "…"


def main():
    root = sys.argv[1] if len(sys.argv) > 1 else "."
    report = {
        "summary": {
            "errors_count": 0,
            "review_required_count": 0
        },
        "errors": [],
        "review_required": []
    }

    for path in iter_files(root):
        try:
            with open(path, "r", encoding="utf-8") as f:
                text = f.read()
        except Exception:
            continue

        for offset, lang, value in find_strings(text):
            issues = detect_issues(value)
            if not issues:
                continue
            line = text.count("\n", 0, offset) + 1
            rel_path = os.path.relpath(path, root)
            if "sh_dj" in issues:
                report["errors"].append({
                    "type": "sh_dj",
                    "file": rel_path,
                    "line": line,
                    "lang": lang,
                    "snippet": snippet(value)
                })
            if "mixed_script" in issues:
                report["errors"].append({
                    "type": "mixed_script",
                    "file": rel_path,
                    "line": line,
                    "lang": lang,
                    "snippet": snippet(value)
                })
            if "ch" in issues:
                report["review_required"].append({
                    "type": "ch",
                    "file": rel_path,
                    "line": line,
                    "lang": lang,
                    "snippet": snippet(value)
                })

    report["summary"]["errors_count"] = len(report["errors"])
    report["summary"]["review_required_count"] = len(report["review_required"])

    payload = json.dumps(report, ensure_ascii=False, indent=2)
    sys.stdout.buffer.write(payload.encode("utf-8"))
    return 1 if report["summary"]["errors_count"] > 0 else 0


if __name__ == "__main__":
    raise SystemExit(main())
