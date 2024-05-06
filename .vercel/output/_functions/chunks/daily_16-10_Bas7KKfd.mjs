import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"в-течение-каждого-дня\">В ТЕЧЕНИЕ КАЖДОГО ДНЯ</h2>\n<p><strong>Это не происходит за один день. Это задача на всю оставшуюся жизнь.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 82<br>\nAlcoholics Anonymous, p. 84</em></strong></p>\n<p>В первые годы своего пребывания в АА я воспринимал Десятый Шаг как\nрекомендацию периодически отслеживать свое поведение и свою реакцию на людей и\nобстоятельства. Если что-то было не так — значит, мне следовало признать это,\nесли нужно было извиниться — то так тому и быть. После нескольких лет\nтрезвости я почувствовал, что мне чаще надо заниматься самоанализом. И только\nпосле еще нескольких лет трезвой жизни я осознал полный смысл Десятого Шага и\nслова «продолжали». «Продолжали» не означает время от времени или часто. Это\nзначит — <em>в течение</em> всего дня, и так — ежедневно.</p>";

				const frontmatter = {"title":"16 октября","description":"Размышления АА на сегодня - 16 октября","id":"290","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_16-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## В ТЕЧЕНИЕ КАЖДОГО ДНЯ\n\n**Это не происходит за один день. Это задача на всю оставшуюся жизнь.**\n\n**_Анонимные Алкоголики, с. 82  \nAlcoholics Anonymous, p. 84_**\n\nВ первые годы своего пребывания в АА я воспринимал Десятый Шаг как\nрекомендацию периодически отслеживать свое поведение и свою реакцию на людей и\nобстоятельства. Если что-то было не так — значит, мне следовало признать это,\nесли нужно было извиниться — то так тому и быть. После нескольких лет\nтрезвости я почувствовал, что мне чаще надо заниматься самоанализом. И только\nпосле еще нескольких лет трезвой жизни я осознал полный смысл Десятого Шага и\nслова «продолжали». «Продолжали» не означает время от времени или часто. Это\nзначит — _в течение_ всего дня, и так — ежедневно.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"в-течение-каждого-дня","text":"В ТЕЧЕНИЕ КАЖДОГО ДНЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
