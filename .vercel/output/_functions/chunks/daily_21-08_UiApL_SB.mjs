import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"мы-просто-пытаемся\">МЫ ПРОСТО ПЫТАЕМСЯ</h2>\n<p><strong>Моя стабильность возникала из стремления просто отдавать, а не из требований\nполучать что-то взамен.</strong></p>\n<p><strong><em>Лучшее из Билла<br>\nThe Best of Bill, pp. 46-47</em></strong></p>\n<p>Когда всем сердцем и душой я отдаю другим то, что было передано мне, и ничего\nне требую взамен, все идет нормально. До Программы АА я никогда ничего не мог\nотдать, не потребовав чего-то взамен. Я и не ведал, что как только начну\nотдавать частицу себя, не требуя и не ожидая ничего взамен, то начну и\nполучать. Дары, что я получаю сегодня, как получал и Билл, это моя\nстабильность в Программе АА, стабильность внутренняя и, что самое главное,\nстабильность в моих отношениях с Высшей Силой, которую я называю Богом.</p>";

				const frontmatter = {"title":"21 августа","description":"Размышления АА на сегодня - 21 августа","id":"234","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_21-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## МЫ ПРОСТО ПЫТАЕМСЯ\n\n**Моя стабильность возникала из стремления просто отдавать, а не из требований\nполучать что-то взамен.**\n\n**_Лучшее из Билла  \nThe Best of Bill, pp. 46-47_**\n\nКогда всем сердцем и душой я отдаю другим то, что было передано мне, и ничего\nне требую взамен, все идет нормально. До Программы АА я никогда ничего не мог\nотдать, не потребовав чего-то взамен. Я и не ведал, что как только начну\nотдавать частицу себя, не требуя и не ожидая ничего взамен, то начну и\nполучать. Дары, что я получаю сегодня, как получал и Билл, это моя\nстабильность в Программе АА, стабильность внутренняя и, что самое главное,\nстабильность в моих отношениях с Высшей Силой, которую я называю Богом.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"мы-просто-пытаемся","text":"МЫ ПРОСТО ПЫТАЕМСЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
