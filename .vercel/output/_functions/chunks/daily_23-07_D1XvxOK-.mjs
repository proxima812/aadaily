import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"я-прошу-бога-решить\">Я ПРОШУ БОГА РЕШИТЬ</h2>\n<p><strong>«Прошу Тебя освободить меня от всех недостатков моего характера, которые\nмешают мне быть полезным для Тебя и других».</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 74<br>\nAlcoholics Anonymous, p. 76</em></strong></p>\n<p>Признав свое бессилие и приняв решение перепоручить свою волю и жизнь Богу,\nкак я Его понимаю, я не решаю для себя, какие недостатки должны быть устранены\nи в каком порядке, или же к какому времени. Я прошу Бога решить, какие мои\nнедостатки мешают мне служить Ему и людям, и затем смиренно прошу Его их\nустранить.</p>";

				const frontmatter = {"title":"23 июля","description":"Размышления АА на сегодня - 23 июля","id":"205","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyul/daily_23-07.md";
				const url = undefined;
				function rawContent() {
					return "\n## Я ПРОШУ БОГА РЕШИТЬ\n\n**«Прошу Тебя освободить меня от всех недостатков моего характера, которые\nмешают мне быть полезным для Тебя и других».**\n\n**_Анонимные Алкоголики, с. 74  \nAlcoholics Anonymous, p. 76_**\n\nПризнав свое бессилие и приняв решение перепоручить свою волю и жизнь Богу,\nкак я Его понимаю, я не решаю для себя, какие недостатки должны быть устранены\nи в каком порядке, или же к какому времени. Я прошу Бога решить, какие мои\nнедостатки мешают мне служить Ему и людям, и затем смиренно прошу Его их\nустранить.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"я-прошу-бога-решить","text":"Я ПРОШУ БОГА РЕШИТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
