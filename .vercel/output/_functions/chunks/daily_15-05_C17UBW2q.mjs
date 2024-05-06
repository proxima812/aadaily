import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"познай-бога--познаешь-покой\">ПОЗНАЙ БОГА — ПОЗНАЕШЬ ПОКОЙ</h2>\n<p><strong>Совершенно очевидно, что жизнь, наполненная ощущением недовольства,\nбессмысленна и лишена счастья… Для алкоголиков, чьи надежды связаны с\nсохранением и ростом духовного опыта, недовольство особенно нежелательно.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 64<br>\nAlcoholics Anonymous, p. 66</em></strong></p>\n<p>ПОЗНАЙ БОГА —</p>\n<p>ПОЗНАЕШЬ ПОКОЙ.</p>\n<p>НЕТ БОГА —</p>\n<p>НЕТ ПОКОЯ.</p>";

				const frontmatter = {"title":"15 мая","description":"Размышления АА на сегодня - 15 мая","id":"136","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_15-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПОЗНАЙ БОГА — ПОЗНАЕШЬ ПОКОЙ\n\n**Совершенно очевидно, что жизнь, наполненная ощущением недовольства,\nбессмысленна и лишена счастья… Для алкоголиков, чьи надежды связаны с\nсохранением и ростом духовного опыта, недовольство особенно нежелательно.**\n\n**_Анонимные Алкоголики, с. 64  \nAlcoholics Anonymous, p. 66_**\n\nПОЗНАЙ БОГА —\n\nПОЗНАЕШЬ ПОКОЙ.\n\nНЕТ БОГА —\n\nНЕТ ПОКОЯ.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"познай-бога--познаешь-покой","text":"ПОЗНАЙ БОГА — ПОЗНАЕШЬ ПОКОЙ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
