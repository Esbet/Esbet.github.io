(function () {
	const STORAGE_KEY = 'theme';
	const root = document.documentElement;
	const toggles = document.querySelectorAll('.theme-toggle');

	function getSystemTheme() {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	function getTheme() {
		return localStorage.getItem(STORAGE_KEY) || getSystemTheme();
	}

	function applyTheme(theme) {
		root.setAttribute('data-theme', theme);
		localStorage.setItem(STORAGE_KEY, theme);

		const isDark = theme === 'dark';
		toggles.forEach(function (toggle) {
			toggle.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
			toggle.setAttribute('title', isDark ? 'Modo claro' : 'Modo oscuro');
		});
	}

	function toggleTheme() {
		const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
		applyTheme(next);
	}

	toggles.forEach(function (toggle) {
		toggle.addEventListener('click', toggleTheme);
	});

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
		if (!localStorage.getItem(STORAGE_KEY)) {
			applyTheme(e.matches ? 'dark' : 'light');
		}
	});

	applyTheme(getTheme());
})();
