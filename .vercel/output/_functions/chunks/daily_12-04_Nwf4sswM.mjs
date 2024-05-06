import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"отказ-от-безумия\">ОТКАЗ ОТ БЕЗУМИЯ</h2>\n<p><strong>…Там, где дело касалось алкоголя, мы были просто безумными.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 37<br>\nAlcoholics Anonymous, p. 38</em></strong></p>\n<p>Алкоголизм требовал от меня, чтобы я пил, — хочу я этого или нет. Безумие\nвладело моей жизнью и было сущностью моей болезни. Оно лишило меня свободы\nвыбора в отношении выпивки и, соответственно, вообще какого-либо выбора. Когда\nя пил, я был не способен разумно сделать выбор в любой из жизненных ситуаций,\nи жизнь стала неуправляемой.</p>\n<p>Я прошу Бога помочь мне понять и принять алкоголизм как болезнь.</p>";

				const frontmatter = {"title":"12 апреля","description":"Размышления АА на сегодня - 12 апреля","id":"103","datePublished":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/april/daily_12-04.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОТКАЗ ОТ БЕЗУМИЯ\n\n**…Там, где дело касалось алкоголя, мы были просто безумными.**\n\n**_Анонимные Алкоголики, с. 37  \nAlcoholics Anonymous, p. 38_**\n\nАлкоголизм требовал от меня, чтобы я пил, — хочу я этого или нет. Безумие\nвладело моей жизнью и было сущностью моей болезни. Оно лишило меня свободы\nвыбора в отношении выпивки и, соответственно, вообще какого-либо выбора. Когда\nя пил, я был не способен разумно сделать выбор в любой из жизненных ситуаций,\nи жизнь стала неуправляемой.\n\nЯ прошу Бога помочь мне понять и принять алкоголизм как болезнь.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"отказ-от-безумия","text":"ОТКАЗ ОТ БЕЗУМИЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
