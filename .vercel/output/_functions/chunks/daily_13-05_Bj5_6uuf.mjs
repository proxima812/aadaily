import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"более-легкий-и-мягкий-путь\">БОЛЕЕ ЛЕГКИЙ И МЯГКИЙ ПУТЬ</h2>\n<p><strong>…если мы не пройдем этот важный этап, то не сможем бросить пить.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 70<br>\nAlcoholics Anonymous, p. 72</em></strong></p>\n<p>Я, конечно, не испытывал радости от возможности встретиться лицом к лицу с тем\nсобой, каким я был раньше. Особенно же не хотелось этого тогда, когда\nстрадания моих запойных дней все еще тучей висели надо мной. Но вскоре на\nсобраниях я услышал об одном члене АА, который не желал работать по Пятому\nШагу. Он продолжал посещать собрания, дрожа от ужаса, что прошлое может ожить\nв его памяти. Гораздо легче и проще сделать эти Шаги от нашей фатальной\nболезни к свободе и поверить в наше Содружество и в Высшую Силу.</p>";

				const frontmatter = {"title":"13 мая","description":"Размышления АА на сегодня - 13 мая","id":"134","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_13-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## БОЛЕЕ ЛЕГКИЙ И МЯГКИЙ ПУТЬ\n\n**…если мы не пройдем этот важный этап, то не сможем бросить пить.**\n\n**_Анонимные Алкоголики, с. 70  \nAlcoholics Anonymous, p. 72_**\n\nЯ, конечно, не испытывал радости от возможности встретиться лицом к лицу с тем\nсобой, каким я был раньше. Особенно же не хотелось этого тогда, когда\nстрадания моих запойных дней все еще тучей висели надо мной. Но вскоре на\nсобраниях я услышал об одном члене АА, который не желал работать по Пятому\nШагу. Он продолжал посещать собрания, дрожа от ужаса, что прошлое может ожить\nв его памяти. Гораздо легче и проще сделать эти Шаги от нашей фатальной\nболезни к свободе и поверить в наше Содружество и в Высшую Силу.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"более-легкий-и-мягкий-путь","text":"БОЛЕЕ ЛЕГКИЙ И МЯГКИЙ ПУТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
