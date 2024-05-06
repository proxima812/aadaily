import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"бесценная-награда\">БЕСЦЕННАЯ НАГРАДА</h2>\n<p><strong>…работа с другими алкоголиками… Она помогает там, где все другие средства\nбессильны.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 86<br>\nAlcoholics Anonymous, p. 89</em></strong></p>\n<p>«Жизнь приобретает новый смысл» — говорится в Большой книге ( <em>Анонимные\nАлкоголики</em> , с. 89). Это обещание помогло мне избежать своекорыстия и жалости\nк себе. Наблюдать за тем, как растут люди в этой чудесной Программе и как\nулучшается качество их жизни, — это бесценная награда мне за усилия помогать\nдругим. Но есть и другие награды за трезвость — это способность к самоанализу,\nобретенный наконец душевный покой и умиротворение. Когда я вижу других людей\nна пути успеха, когда я разделяю с ними радость этого чудесного пути, я\nполучаю энергию, которая придает моей жизни новый смысл.</p>";

				const frontmatter = {"title":"17 декабря","description":"Размышления АА на сегодня - 17 декабря","id":"352","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_17-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## БЕСЦЕННАЯ НАГРАДА\n\n**…работа с другими алкоголиками… Она помогает там, где все другие средства\nбессильны.**\n\n**_Анонимные Алкоголики, с. 86  \nAlcoholics Anonymous, p. 89_**\n\n«Жизнь приобретает новый смысл» — говорится в Большой книге ( _Анонимные\nАлкоголики_ , с. 89). Это обещание помогло мне избежать своекорыстия и жалости\nк себе. Наблюдать за тем, как растут люди в этой чудесной Программе и как\nулучшается качество их жизни, — это бесценная награда мне за усилия помогать\nдругим. Но есть и другие награды за трезвость — это способность к самоанализу,\nобретенный наконец душевный покой и умиротворение. Когда я вижу других людей\nна пути успеха, когда я разделяю с ними радость этого чудесного пути, я\nполучаю энергию, которая придает моей жизни новый смысл.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"бесценная-награда","text":"БЕСЦЕННАЯ НАГРАДА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
