"""
Test HTML structure and links for the anti-scam website.
"""
import os
import re
from pathlib import Path
from bs4 import BeautifulSoup
import pytest

# Project root directory
ROOT = Path(__file__).parent.parent


def get_html_files():
    """Get all HTML files in the project root."""
    return list(ROOT.glob("*.html"))


def get_js_files():
    """Get all JS files in the project root."""
    return list(ROOT.glob("*.js"))


class TestHTMLFiles:
    """Test that all HTML files are valid and have required elements."""
    
    @pytest.fixture
    def html_files(self):
        return get_html_files()
    
    def test_html_files_exist(self, html_files):
        """At least one HTML file should exist."""
        assert len(html_files) > 0, "No HTML files found"
    
    @pytest.mark.parametrize("html_file", get_html_files(), ids=lambda f: f.name)
    def test_html_has_doctype(self, html_file):
        """Each HTML file should have DOCTYPE declaration."""
        content = html_file.read_text(encoding="utf-8")
        assert content.strip().lower().startswith("<!doctype html"), \
            f"{html_file.name} missing DOCTYPE"
    
    @pytest.mark.parametrize("html_file", get_html_files(), ids=lambda f: f.name)
    def test_html_has_lang(self, html_file):
        """Each HTML file should have lang attribute."""
        content = html_file.read_text(encoding="utf-8")
        soup = BeautifulSoup(content, "lxml")
        html_tag = soup.find("html")
        assert html_tag is not None, f"{html_file.name} missing <html> tag"
        assert html_tag.get("lang"), f"{html_file.name} missing lang attribute"
    
    @pytest.mark.parametrize("html_file", get_html_files(), ids=lambda f: f.name)
    def test_html_has_charset(self, html_file):
        """Each HTML file should have charset meta tag."""
        content = html_file.read_text(encoding="utf-8")
        soup = BeautifulSoup(content, "lxml")
        charset = soup.find("meta", charset=True)
        assert charset is not None, f"{html_file.name} missing charset meta tag"
    
    @pytest.mark.parametrize("html_file", get_html_files(), ids=lambda f: f.name)
    def test_html_has_title(self, html_file):
        """Each HTML file should have a title."""
        content = html_file.read_text(encoding="utf-8")
        soup = BeautifulSoup(content, "lxml")
        title = soup.find("title")
        assert title is not None, f"{html_file.name} missing <title>"
        assert title.text.strip(), f"{html_file.name} has empty title"


class TestInternalLinks:
    """Test that all internal links point to existing files."""
    
    @pytest.mark.parametrize("html_file", get_html_files(), ids=lambda f: f.name)
    def test_internal_links_exist(self, html_file):
        """All internal href links should point to existing files."""
        content = html_file.read_text(encoding="utf-8")
        soup = BeautifulSoup(content, "lxml")
        
        broken_links = []
        for link in soup.find_all("a", href=True):
            href = link["href"]
            
            # Skip external links, anchors, and javascript
            if href.startswith(("http://", "https://", "#", "javascript:", "mailto:")):
                continue
            
            # Remove anchor part
            href = href.split("#")[0]
            if not href:
                continue
            
            # Check if file exists
            target_path = ROOT / href
            if not target_path.exists():
                broken_links.append(href)
        
        assert not broken_links, \
            f"{html_file.name} has broken links: {broken_links}"


class TestScriptReferences:
    """Test that all script references point to existing files."""
    
    @pytest.mark.parametrize("html_file", get_html_files(), ids=lambda f: f.name)
    def test_script_files_exist(self, html_file):
        """All script src references should point to existing files."""
        content = html_file.read_text(encoding="utf-8")
        soup = BeautifulSoup(content, "lxml")
        
        missing_scripts = []
        for script in soup.find_all("script", src=True):
            src = script["src"]
            
            # Skip external scripts
            if src.startswith(("http://", "https://", "//")):
                continue
            
            # Check if file exists
            script_path = ROOT / src
            if not script_path.exists():
                missing_scripts.append(src)
        
        assert not missing_scripts, \
            f"{html_file.name} references missing scripts: {missing_scripts}"
    
    @pytest.mark.parametrize("html_file", get_html_files(), ids=lambda f: f.name)
    def test_stylesheet_files_exist(self, html_file):
        """All stylesheet references should point to existing files."""
        content = html_file.read_text(encoding="utf-8")
        soup = BeautifulSoup(content, "lxml")
        
        missing_styles = []
        for link in soup.find_all("link", rel="stylesheet"):
            href = link.get("href")
            if not href:
                continue
            
            # Skip external stylesheets
            if href.startswith(("http://", "https://", "//")):
                continue
            
            # Check if file exists
            style_path = ROOT / href
            if not style_path.exists():
                missing_styles.append(href)
        
        assert not missing_styles, \
            f"{html_file.name} references missing stylesheets: {missing_styles}"


class TestLanguageAttributes:
    """Test that language switching attributes are present."""
    
    @pytest.mark.parametrize("html_file", get_html_files(), ids=lambda f: f.name)
    def test_has_language_elements(self, html_file):
        """HTML files should have elements with data-sr and data-en attributes."""
        content = html_file.read_text(encoding="utf-8")
        soup = BeautifulSoup(content, "lxml")
        
        sr_elements = soup.find_all(attrs={"data-sr": True})
        en_elements = soup.find_all(attrs={"data-en": True})
        
        # At least navigation should have language attributes
        assert len(sr_elements) > 0, \
            f"{html_file.name} has no data-sr attributes"
        assert len(en_elements) > 0, \
            f"{html_file.name} has no data-en attributes"
    
    @pytest.mark.parametrize("html_file", get_html_files(), ids=lambda f: f.name)
    def test_has_topbar(self, html_file):
        """HTML files should have topbar for controls."""
        content = html_file.read_text(encoding="utf-8")
        soup = BeautifulSoup(content, "lxml")
        
        topbar = soup.find("div", class_="topbar")
        assert topbar is not None, f"{html_file.name} missing topbar"
