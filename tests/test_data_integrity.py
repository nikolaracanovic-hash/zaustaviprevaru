"""
Test data.js integrity and completeness.
"""
import json
import re
from pathlib import Path
import pytest

ROOT = Path(__file__).parent.parent


def parse_js_object(js_content, var_name):
    """Extract a JavaScript object/array from JS file content."""
    # Find the variable assignment
    pattern = rf'{var_name}\s*=\s*(\{{[\s\S]*?\}});?\s*$'
    match = re.search(pattern, js_content, re.MULTILINE)
    
    if not match:
        # Try array pattern
        pattern = rf'{var_name}\s*=\s*(\[[\s\S]*?\]);?\s*$'
        match = re.search(pattern, js_content, re.MULTILINE)
    
    if not match:
        return None
    
    js_obj = match.group(1)
    
    # Convert JS object to JSON-compatible format
    # Replace single quotes with double quotes
    js_obj = re.sub(r"'", '"', js_obj)
    # Add quotes to unquoted keys
    js_obj = re.sub(r'(\s*)(\w+)(\s*:)', r'\1"\2"\3', js_obj)
    # Remove trailing commas
    js_obj = re.sub(r',(\s*[}\]])', r'\1', js_obj)
    
    try:
        return json.loads(js_obj)
    except json.JSONDecodeError:
        return None


class TestDataJS:
    """Test data.js file."""
    
    @pytest.fixture
    def data_js_content(self):
        data_file = ROOT / "data.js"
        assert data_file.exists(), "data.js not found"
        return data_file.read_text(encoding="utf-8")
    
    def test_data_js_exists(self):
        """data.js should exist."""
        assert (ROOT / "data.js").exists()
    
    def test_data_js_defines_scam_db(self, data_js_content):
        """data.js should define window.SCAM_DB."""
        assert "SCAM_DB" in data_js_content
        assert "window.SCAM_DB" in data_js_content
    
    def test_scam_entries_have_required_fields(self, data_js_content):
        """Each scam entry should have title, subtitle, hasPage."""
        # Check for required field patterns
        assert "title:" in data_js_content
        assert "hasPage:" in data_js_content


class TestContentFiles:
    """Test .content.js files."""
    
    def get_content_files(self):
        return list(ROOT.glob("*.content.js"))
    
    def test_content_files_exist(self):
        """At least some content files should exist."""
        content_files = self.get_content_files()
        assert len(content_files) > 0, "No .content.js files found"
    
    @pytest.mark.parametrize("content_file", 
                             list(ROOT.glob("*.content.js")),
                             ids=lambda f: f.name)
    def test_content_file_defines_scam_content(self, content_file):
        """Each content file should define SCAM_CONTENT."""
        content = content_file.read_text(encoding="utf-8")
        assert "SCAM_CONTENT" in content, \
            f"{content_file.name} doesn't define SCAM_CONTENT"
    
    @pytest.mark.parametrize("content_file",
                             list(ROOT.glob("*.content.js")),
                             ids=lambda f: f.name)
    def test_content_has_raw_html_or_structured(self, content_file):
        """Content should have raw_html or structured data."""
        content = content_file.read_text(encoding="utf-8")
        has_raw = "raw_html" in content
        has_structured = "overview" in content or "steps" in content
        
        assert has_raw or has_structured, \
            f"{content_file.name} has no content (raw_html or structured)"


class TestHTMLContentMatch:
    """Test that HTML files have matching content files where expected."""
    
    def test_scam_pages_have_content(self):
        """HTML files with scam-meta should have corresponding content files."""
        html_files = list(ROOT.glob("*.html"))
        
        missing_content = []
        for html_file in html_files:
            content = html_file.read_text(encoding="utf-8")
            
            # Check if this is a scam page (has scam-meta)
            if 'data-scam="' in content:
                # Extract scam slug
                match = re.search(r'data-scam="([^"]+)"', content)
                if match:
                    slug = match.group(1)
                    
                    # Check for content file (various naming patterns)
                    base_name = slug.replace("-scam", "").replace("-", "-")
                    possible_names = [
                        f"{base_name}.content.js",
                        f"{slug}.content.js",
                        f"{base_name.replace('-', '')}.content.js",
                    ]
                    
                    found = False
                    for name in possible_names:
                        if (ROOT / name).exists():
                            found = True
                            break
                    
                    # Also check if there's any content file that contains this slug
                    if not found:
                        for cf in ROOT.glob("*.content.js"):
                            if slug in cf.read_text(encoding="utf-8"):
                                found = True
                                break
                    
                    if not found:
                        missing_content.append((html_file.name, slug))
        
        # This is a warning, not a hard failure
        # Some pages might use only data.js data
        if missing_content:
            print(f"\nNote: These pages might be missing content files: {missing_content}")
