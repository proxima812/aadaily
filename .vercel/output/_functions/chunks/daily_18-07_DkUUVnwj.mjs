import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"благодарность-за-то-что-имею\">БЛАГОДАРНОСТЬ ЗА ТО, ЧТО ИМЕЮ</h2>\n<p><strong>Раскрыв для себя смысл смирения, мы серьезно изменили наше отношение к\nБогу…</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 86<br>\nTwelve Steps and Twelve Traditions, p. 75</em></strong></p>\n<p>Сегодня мои молитвы в основном состоят из слов благодарности Высшей Силе за\nмою трезвость и за Ее милость. Однако мне надо также просить помощи и силы,\nчтобы исполнить Божью волю в отношении меня. Мне больше не требуется, чтобы\nБог ежеминутно выручал меня из ситуаций, в которые я сам и попадаю, не\nисполняя Его воли. Сейчас, как мне кажется, моя благодарность напрямую связана\nсо смирением. Пока у меня есть смирение благодарить Бога за то, что имею, Он\nне оставит меня Своей милостью.</p>";

				const frontmatter = {"title":"18 июля","description":"Размышления АА на сегодня - 18 июля","id":"200","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyul/daily_18-07.md";
				const url = undefined;
				function rawContent() {
					return "\n## БЛАГОДАРНОСТЬ ЗА ТО, ЧТО ИМЕЮ\n\n**Раскрыв для себя смысл смирения, мы серьезно изменили наше отношение к\nБогу…**\n\n**_Двенадцать шагов и двенадцать традиций, с. 86  \nTwelve Steps and Twelve Traditions, p. 75_**\n\nСегодня мои молитвы в основном состоят из слов благодарности Высшей Силе за\nмою трезвость и за Ее милость. Однако мне надо также просить помощи и силы,\nчтобы исполнить Божью волю в отношении меня. Мне больше не требуется, чтобы\nБог ежеминутно выручал меня из ситуаций, в которые я сам и попадаю, не\nисполняя Его воли. Сейчас, как мне кажется, моя благодарность напрямую связана\nсо смирением. Пока у меня есть смирение благодарить Бога за то, что имею, Он\nне оставит меня Своей милостью.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"благодарность-за-то-что-имею","text":"БЛАГОДАРНОСТЬ ЗА ТО, ЧТО ИМЕЮ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
