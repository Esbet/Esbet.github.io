const services = [
	{
		icon: 'fa-laptop-code',
		color: 'blue',
		title: 'Desarrollo web frontend',
		description: 'Construcción de aplicaciones web modernas, escalables y orientadas a componentes con frameworks líderes y buenas prácticas de TypeScript.',
		tags: ['Angular', 'StencilJS', 'TypeScript', 'Web Components']
	},
	{
		icon: 'fa-mobile-alt',
		color: 'red',
		title: 'Apps móviles híbridas',
		description: 'Desarrollo de experiencias móviles multiplataforma con interfaces fluidas, alto rendimiento y despliegue en Android e iOS.',
		tags: ['Flutter', 'Ionic', 'Android', 'iOS']
	},
	{
		icon: 'fa-project-diagram',
		color: 'green',
		title: 'Microfrontends y superapps',
		description: 'Diseño e implementación de arquitecturas modulares que integran múltiples aplicaciones en una experiencia unificada y escalable.',
		tags: ['Microfrontends', 'Superapps', 'Arquitectura frontend', 'Escalabilidad']
	},
	{
		icon: 'fa-layer-group',
		color: 'purple',
		title: 'Sistemas de diseño',
		description: 'Creación y evolución de design systems y bibliotecas de componentes reutilizables para mantener consistencia visual y acelerar el desarrollo.',
		tags: ['Design Systems', 'UI Components', 'UX/UI', 'Consistencia visual']
	}
];

const projects = [
	{
		id: 'controlmoney',
		category: 'mobile',
		name: 'ControlMoney',
		title: 'Aplicación para envío de dinero',
		description: 'ControlMoney es una aplicación móvil para el envío de dinero a diferentes países de LATAM y el mundo, desarrollada para ControlBox Corp. Participé en la definición e implementación de la arquitectura, diseño y desarrollo de gran parte del flujo de la aplicación.',
		image: 'images/controlmoney.png',
		client: 'ControlBox Corp.',
		role: 'Arquitectura y desarrollo',
		playStoreUrl: 'https://play.google.com/store/apps/details?id=net.controlmoney.base&hl=en'
	},
	{
		id: 'fecurity',
		category: 'mobile',
		name: 'Fecurity',
		title: 'Gestión de mantenimiento en parques',
		description: 'Aplicación móvil para tareas de mantenimiento en parques y centros de entretenimiento familiar, usada por más de 50 parques en Colombia, Perú y Panamá. Desarrollada para Innodrive S.A.S. Participé en el desarrollo de módulos y diseño de la aplicación.',
		image: 'images/fecurity.png',
		client: 'Innodrive S.A.S',
		role: 'Desarrollo y diseño',
		playStoreUrl: 'https://play.google.com/store/apps/details?id=com.innodrive.fecurityplus.mobile&hl=en'
	},
	{
		id: 'flypass',
		category: 'mobile',
		name: 'Flypass',
		title: 'Movilidad y pagos electrónicos',
		description: 'App móvil para pagar peajes, parqueaderos, parquímetros y otros servicios vehiculares sin efectivo. Desarrollada por F2X S.A.S. He participado en varias iniciativas dentro de la aplicación, contribuyendo al desarrollo de nuevas funcionalidades y mejoras de experiencia.',
		image: 'images/flypass.png',
		client: 'F2X S.A.S',
		role: 'Desarrollo frontend',
		playStoreUrl: 'https://play.google.com/store/apps/details?id=co.com.flypass.flypassApp&hl=en'
	},
	{
		id: 'flypass-web',
		category: 'web',
		name: 'Flypass Web',
		title: 'Portal web de gestión de cuenta',
		description: 'Portal web para consultar el estado de la cuenta, saldos, recargas y servicios vehiculares como peajes y parqueaderos. Desarrollada por F2X S.A.S. He participado en varias iniciativas dentro de la plataforma, aportando al desarrollo frontend y a la mejora de la experiencia de usuario.',
		image: 'images/flypass-web.png',
		client: 'F2X S.A.S',
		role: 'Desarrollo frontend',
		websiteUrl: 'https://www.flypass.com.co/'
	},
	{
		id: 'netvoz',
		category: 'mobile',
		name: 'Netvoz',
		title: 'Comercio electrónico para tiendas de barrio',
		description: 'Aplicación de comercio electrónico orientada a tiendas de barrio, desarrollada para Innodrive S.A.S. Participé en el desarrollo de módulos y en el diseño de la aplicación.',
		image: 'images/netvoz.png',
		client: 'Innodrive S.A.S',
		role: 'Desarrollo y diseño',
		playStoreUrl: 'https://play.google.com/store/apps/details?id=com.innodrive.netvozposmobile&hl=en'
	},
	{
		id: 'massy',
		category: 'mobile',
		name: 'Massy',
		title: 'Envío de dinero en el Caribe',
		description: 'Aplicación para el envío de dinero en las islas del Caribe, desarrollada para ControlBox Corp. Participé en el desarrollo de módulos clave de la plataforma.',
		image: 'images/massy.png',
		client: 'ControlBox Corp.',
		role: 'Desarrollo de módulos',
		playStoreUrl: 'https://play.google.com/store/apps/details?id=net.controlmoney.massyremittancedigital&hl=en'
	},
	{
		id: 'fecurity-web',
		category: 'web',
		name: 'Fecurity Web',
		title: 'Inspección y control de tareas',
		description: 'Aplicación web para inspección, registro y control de tareas de mantenimiento en parques y centros de entretenimiento. Desarrollada para Innodrive S.A.S. Participé en soporte y desarrollo de módulos.',
		image: 'images/fecurity_web.png',
		client: 'Innodrive S.A.S',
		role: 'Soporte y desarrollo'
	},
	{
		id: 'procesos-contables',
		category: 'web',
		name: 'Procesos Contables',
		title: 'Registro de contabilidad',
		description: 'Aplicación web para registros de contabilidad empresarial, desarrollada para Innodrive S.A.S. Participé en soporte y desarrollo de módulos.',
		image: 'images/Procesos_contables.png',
		client: 'Innodrive S.A.S',
		role: 'Soporte y desarrollo'
	},
	{
		id: 'control-redencion',
		category: 'web',
		name: 'Control Redención',
		title: 'Reconocimiento de saldos',
		description: 'Aplicación web para el reconocimiento de saldos de tarjetas en parques de diversiones, desarrollada para Innodrive S.A.S. Participé en soporte y desarrollo de módulos.',
		image: 'images/control_redencion.png',
		client: 'Innodrive S.A.S',
		role: 'Soporte y desarrollo'
	}
];

const technologies = [
	{ name: 'Angular', icon: 'images/SVG/angular-svgrepo-com.svg' },
	{ name: 'Flutter', icon: 'images/SVG/flutter-svgrepo-com.svg' },
	{ name: 'Ionic', icon: 'images/SVG/ionic-icon-svgrepo-com.svg' },
	{ name: 'StencilJS', icon: 'images/SVG/stencil-svgrepo-com.svg' },
	{ name: 'Node.js', icon: 'images/SVG/node-js-svgrepo-com.svg' },
	{ name: 'NestJS', icon: 'images/SVG/nestjs-svgrepo-com.svg' },
	{ name: 'Spring Boot', icon: 'images/SVG/spring-boot-svgrepo-com.svg' },
	{ name: 'Docker', icon: 'images/SVG/docker-svgrepo-com.svg' },
	{ name: 'PostgreSQL', icon: 'images/SVG/postgresql-svgrepo-com.svg' },
	{ name: 'SQL Server', icon: 'images/SVG/microsoftsqlserver-svgrepo-com.svg' },
	{ name: 'Figma', icon: 'images/SVG/figma-svgrepo-com.svg' },
	{ name: 'Adobe Illustrator', icon: 'images/SVG/illustrator-svgrepo-com.svg' },
	{ name: 'WordPress', icon: 'images/SVG/wordpress-color-svgrepo-com.svg' },
	{ name: 'GitHub', icon: 'images/SVG/github-142-svgrepo-com.svg', mono: true }
];

function renderTechnologies() {
	const container = document.getElementById('technologiesGrid');
	if (!container) return;

	container.innerHTML = technologies.map(function (tech) {
		const monoClass = tech.mono ? ' tech-pill-icon-mono' : '';

		return (
			'<span class="tech-pill">' +
				'<img class="tech-pill-icon' + monoClass + '" src="' + tech.icon + '" alt="" aria-hidden="true">' +
				'<span class="tech-pill-label">' + tech.name + '</span>' +
			'</span>'
		);
	}).join('');
}

function renderServices() {
	const container = document.getElementById('servicesGrid');
	if (!container) return;

	container.innerHTML = services.map(function (service) {
		const tags = service.tags.map(function (tag) {
			return '<span class="service-tag">' + tag + '</span>';
		}).join('');

		return (
			'<div class="col-lg-6 col-xl-3">' +
				'<div class="service-card">' +
					'<div class="service-card-icon ' + service.color + '">' +
						'<span class="fas ' + service.icon + '"></span>' +
					'</div>' +
					'<h5 class="service-card-title">' + service.title + '</h5>' +
					'<p class="service-card-text">' + service.description + '</p>' +
					'<div class="service-tags">' + tags + '</div>' +
				'</div>' +
			'</div>'
		);
	}).join('');
}

function getFilteredProjects(category) {
	if (category === 'all') return projects;
	return projects.filter(function (p) { return p.category === category; });
}

function renderProjectDetail(project) {
	const detail = document.getElementById('portfolioDetail');
	if (!detail || !project) return;

	const categoryLabel = project.category === 'mobile' ? 'Desarrollo móvil' : 'Desarrollo web';
	const storeButton = project.playStoreUrl
		? '<a class="portfolio-store-btn" href="' + project.playStoreUrl + '" target="_blank" rel="noopener noreferrer">' +
			'<span class="fab fa-google-play"></span> Ver en Google Play' +
		  '</a>'
		: '';

	detail.innerHTML =
		'<div class="row align-items-center">' +
			'<div class="col-lg-7">' +
				'<div class="portfolio-image-wrapper">' +
					'<img class="img-fluid portfolio-image" src="' + project.image + '" alt="' + project.name + '">' +
				'</div>' +
			'</div>' +
			'<div class="col-lg-5">' +
				'<div class="portfolio-detail-content">' +
					'<span class="portfolio-category-badge">' + categoryLabel + '</span>' +
					'<div class="section-title">' + project.name + '</div>' +
					'<h3>' + project.title + '</h3>' +
					'<p>' + project.description + '</p>' +
					'<div class="portfolio-meta">' +
						'<div class="portfolio-meta-item">' +
							'<span class="meta-label">Cliente</span>' +
							'<span class="meta-value">' + project.client + '</span>' +
						'</div>' +
						'<div class="portfolio-meta-item">' +
							'<span class="meta-label">Rol</span>' +
							'<span class="meta-value">' + project.role + '</span>' +
						'</div>' +
					'</div>' +
					storeButton +
				'</div>' +
			'</div>' +
		'</div>';
}

function renderProjectNav(category, activeId) {
	const nav = document.getElementById('portfolioNav');
	if (!nav) return;

	const filtered = getFilteredProjects(category);
	const activeProject = filtered.find(function (p) { return p.id === activeId; }) || filtered[0];

	nav.innerHTML = filtered.map(function (project) {
		const isActive = project.id === activeProject.id ? ' active' : '';
		return (
			'<button type="button" class="portfolio-nav-item' + isActive + '" data-project-id="' + project.id + '">' +
				project.name +
			'</button>'
		);
	}).join('');

	renderProjectDetail(activeProject);

	nav.querySelectorAll('.portfolio-nav-item').forEach(function (btn) {
		btn.addEventListener('click', function () {
			nav.querySelectorAll('.portfolio-nav-item').forEach(function (b) {
				b.classList.remove('active');
			});
			btn.classList.add('active');
			const project = projects.find(function (p) { return p.id === btn.dataset.projectId; });
			renderProjectDetail(project);
		});
	});
}

function initPortfolio() {
	let activeCategory = 'all';
	const filterButtons = document.querySelectorAll('.portfolio-filter-btn');

	filterButtons.forEach(function (btn) {
		btn.addEventListener('click', function () {
			filterButtons.forEach(function (b) { b.classList.remove('active'); });
			btn.classList.add('active');
			activeCategory = btn.dataset.filter;
			renderProjectNav(activeCategory);
		});
	});

	renderProjectNav(activeCategory);
}

document.addEventListener('DOMContentLoaded', function () {
	renderTechnologies();
	renderServices();
	initPortfolio();
});
