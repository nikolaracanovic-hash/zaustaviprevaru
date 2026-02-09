"""
Test JavaScript files for basic syntax validity.
"""
import re
from pathlib import Path
import pytest

ROOT = Path(__file__).parent.parent


def get_js_files():
    """Get all JS files in the project root."""
    return list(ROOT.glob("*.js"))


class TestJSSyntax:
    """Test JavaScript files for basic syntax issues."""
    
    @pytest.mark.parametrize("js_file", get_js_files(), ids=lambda f: f.name)
    def test_file_not_empty(self, js_file):
        """JS files should not be empty."""
        content = js_file.read_text(encoding="utf-8")
        assert len(content.strip()) > 0, f"{js_file.name} is empty"
    
    @pytest.mark.parametrize("js_file", get_js_files(), ids=lambda f: f.name)
    def test_has_valid_structure(self, js_file):
        """JS files should have some valid code structure."""
        content = js_file.read_text(encoding="utf-8")
        
        # Should have at least some function or variable definitions
        has_function = 'function' in content
        has_const = 'const ' in content
        has_let = 'let ' in content
        has_var = 'var ' in content
        has_window = 'window.' in content
        
        assert any([has_function, has_const, has_let, has_var, has_window]), \
            f"{js_file.name} has no recognizable JS structures"
    
    @pytest.mark.parametrize("js_file", get_js_files(), ids=lambda f: f.name)
    def test_no_console_errors(self, js_file):
        """JS files should not have console.error calls (usually debugging leftovers)."""
        content = js_file.read_text(encoding="utf-8")
        # console.error is usually a sign of debugging code left in
        # console.log is OK for this project
        error_count = content.count('console.error')
        assert error_count == 0, \
            f"{js_file.name} has {error_count} console.error calls"


class TestCoreFiles:
    """Test that core JS files exist and are valid."""
    
    def test_ui_js_exists(self):
        """ui.js should exist."""
        assert (ROOT / "ui.js").exists()
    
    def test_render_js_exists(self):
        """render.js should exist."""
        assert (ROOT / "render.js").exists()
    
    def test_data_js_exists(self):
        """data.js should exist."""
        assert (ROOT / "data.js").exists()
    
    def test_ui_js_has_key_functions(self):
        """ui.js should have key functions."""
        content = (ROOT / "ui.js").read_text(encoding="utf-8")
        
        assert "applyLang" in content, "ui.js missing applyLang function"
        assert "applyTheme" in content, "ui.js missing applyTheme function"
        assert "DOMContentLoaded" in content, "ui.js missing DOMContentLoaded handler"
    
    def test_render_js_has_key_functions(self):
        """render.js should have key functions."""
        content = (ROOT / "render.js").read_text(encoding="utf-8")
        
        assert "renderMeta" in content, "render.js missing renderMeta function"
        assert "DOMContentLoaded" in content, "render.js missing DOMContentLoaded handler"
