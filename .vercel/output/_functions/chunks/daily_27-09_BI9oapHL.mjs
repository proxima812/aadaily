import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"без-всяких-оговорок\">БЕЗ ВСЯКИХ ОГОВОРОК</h2>\n<p><strong>Переполненное благодарностью [человеческое сердце], с каждым ударом оно,\nконечно же, будет излучать любовь…</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 32</em></strong></p>\n<p>Если процесс служения людям приводит меня к мании величия, мне стоит\nзадуматься над причиной этого. То, что было дано с радостью и любовью, должно\nи передаваться другим без оговорок и ожидания чего-то взамен. Ибо по мере\nмоего духовного -роста я обнаруживаю, что, сколько бы я с лю-бовью ни отдавал,\nдуховно я получаю намного больше.</p>";

				const frontmatter = {"title":"27 сентября","description":"Размышления АА на сегодня - 27 сентября","id":"271","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_27-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## БЕЗ ВСЯКИХ ОГОВОРОК\n\n**Переполненное благодарностью [человеческое сердце], с каждым ударом оно,\nконечно же, будет излучать любовь…**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 32_**\n\nЕсли процесс служения людям приводит меня к мании величия, мне стоит\nзадуматься над причиной этого. То, что было дано с радостью и любовью, должно\nи передаваться другим без оговорок и ожидания чего-то взамен. Ибо по мере\nмоего духовного -роста я обнаруживаю, что, сколько бы я с лю-бовью ни отдавал,\nдуховно я получаю намного больше.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"без-всяких-оговорок","text":"БЕЗ ВСЯКИХ ОГОВОРОК"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
