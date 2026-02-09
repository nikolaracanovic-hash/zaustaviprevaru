"""
Browser tests using Playwright.
These tests catch runtime JavaScript errors that static tests miss.
"""
import re
import pytest
from pathlib import Path
from playwright.sync_api import Page, expect

ROOT = Path(__file__).parent.parent


@pytest.fixture(scope="session")
def base_url():
    """Return file:// URL to project root."""
    return f"file:///{ROOT.as_posix()}"


class TestPageLoads:
    """Test that pages load and render content."""
    
    def test_index_loads(self, page: Page, base_url):
        """Index page should load and show content."""
        page.goto(f"{base_url}/index.html")
        
        # Should have title (any non-empty title)
        title = page.title()
        assert len(title) > 0, "Page has no title"
        
        # Should have visible header
        header = page.locator("header")
        expect(header).to_be_visible()
        
        # Should have navigation links
        nav_links = page.locator("nav a")
        expect(nav_links.first).to_be_visible()
    
    def test_prevare_loads(self, page: Page, base_url):
        """Prevare page should load and show content."""
        page.goto(f"{base_url}/prevare.html")
        page.wait_for_timeout(300)
        
        # Should have title
        title = page.title()
        assert len(title) > 0, "Page has no title"
        
        # Should have content (check body text)
        body_text = page.locator("body").inner_text()
        assert len(body_text.strip()) > 50, "Page has too little content"
    
    def test_scam_page_loads(self, page: Page, base_url):
        """A scam detail page should load and render content."""
        page.goto(f"{base_url}/fake-call-scam.html")
        
        # Should have title
        title = page.title()
        assert len(title) > 0, "Page has no title"
        
        # Should have main heading
        h1 = page.locator("h1").first
        expect(h1).to_be_visible()
        
        # Should have some text content (not empty)
        body_text = page.locator("body").inner_text()
        assert len(body_text.strip()) > 100, "Page has too little content"


class TestLanguageSwitch:
    """Test that language switching works."""
    
    def test_lang_toggle_exists(self, page: Page, base_url):
        """Language toggle buttons should exist (2 separate: SR, EN)."""
        page.goto(f"{base_url}/index.html")
        page.wait_for_timeout(500)
        
        lang_buttons = page.locator(".lang-btn[data-lang]")
        
        # Check 2 buttons exist
        assert lang_buttons.count() == 2, f"Expected 2 lang buttons, found {lang_buttons.count()}"
    
    def test_language_elements_exist(self, page: Page, base_url):
        """Elements with data-sr and data-en should exist."""
        page.goto(f"{base_url}/index.html")
        
        sr_elements = page.locator("[data-sr]")
        en_elements = page.locator("[data-en]")
        
        assert sr_elements.count() > 0, "No data-sr elements"
        assert en_elements.count() > 0, "No data-en elements"
    
    def test_language_toggle_cycles(self, page: Page, base_url):
        """Language buttons should switch between sr, en."""
        page.goto(f"{base_url}/index.html")
        page.wait_for_timeout(500)
        
        # Click SR button
        page.locator('.lang-btn[data-lang="sr"]').click()
        page.wait_for_timeout(300)
        lang_sr = page.locator("html").get_attribute("data-lang")
        assert lang_sr == "sr", f"Expected 'sr', got '{lang_sr}'"
        
        # Click EN button
        page.locator('.lang-btn[data-lang="en"]').click()
        page.wait_for_timeout(300)
        lang_en = page.locator("html").get_attribute("data-lang")
        assert lang_en == "en", f"Expected 'en', got '{lang_en}'"


class TestThemeSwitch:
    """Test that theme switching works."""
    
    def test_theme_button_exists(self, page: Page, base_url):
        """Theme toggle button should exist."""
        page.goto(f"{base_url}/index.html")
        
        theme_btn = page.locator("#themeToggle, button:has-text('Theme'), button:has-text('Tema')")
        expect(theme_btn.first).to_be_visible()
    
    def test_theme_switch_changes_attribute(self, page: Page, base_url):
        """Clicking theme should change data-theme attribute."""
        page.goto(f"{base_url}/index.html")
        
        html = page.locator("html")
        initial_theme = html.get_attribute("data-theme")
        
        # Click theme button
        theme_btn = page.locator("#themeToggle, button:has-text('Theme'), button:has-text('Tema')")
        theme_btn.first.click()
        page.wait_for_timeout(200)
        
        new_theme = html.get_attribute("data-theme")
        
        # Theme should change
        assert new_theme != initial_theme, "Theme did not change after click"


class TestNoJSErrors:
    """Test that pages load without JavaScript errors."""
    
    def test_index_no_console_errors(self, page: Page, base_url):
        """Index page should load without console errors."""
        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        
        page.goto(f"{base_url}/index.html")
        page.wait_for_timeout(500)
        
        # Filter out known non-critical errors (like favicon)
        critical_errors = [e for e in errors if "favicon" not in e.lower()]
        
        assert len(critical_errors) == 0, f"Console errors: {critical_errors}"
    
    def test_scam_page_no_console_errors(self, page: Page, base_url):
        """Scam page should load without console errors."""
        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        
        page.goto(f"{base_url}/fake-call-scam.html")
        page.wait_for_timeout(500)
        
        critical_errors = [e for e in errors if "favicon" not in e.lower()]
        
        assert len(critical_errors) == 0, f"Console errors: {critical_errors}"


class TestDynamicContent:
    """Test that dynamic content renders correctly."""
    
    def test_scam_page_has_meta_box(self, page: Page, base_url):
        """Scam pages should render meta-box with title."""
        page.goto(f"{base_url}/fake-call-scam.html")
        page.wait_for_timeout(300)
        
        # Should have meta-box or similar container
        meta = page.locator(".meta-box, .scam-meta, [data-scam]")
        
        # At least one should exist
        count = meta.count()
        assert count > 0, "No meta-box found on scam page"
    
    def test_content_not_empty_after_render(self, page: Page, base_url):
        """Main content area should not be empty after JS renders."""
        page.goto(f"{base_url}/romantic-scam.html")
        page.wait_for_timeout(500)
        
        # Get main content
        main_content = page.locator("main, .content, article, .scam-content").first
        text = main_content.inner_text()
        
        # Should have substantial content
        assert len(text.strip()) > 50, f"Content too short: {len(text)} chars"
