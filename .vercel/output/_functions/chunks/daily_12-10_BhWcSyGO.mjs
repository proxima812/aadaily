import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"обуздать-торопливость\">ОБУЗДАТЬ ТОРОПЛИВОСТЬ</h2>\n<p><strong>Когда мы говорим или действуем поспешно, наша способность быть разумными и\nтерпеливыми мгновенно улетучивается.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 103<br>\nTwelve Steps and Twelve Traditions, p. 91</em></strong></p>\n<p>Благоразумие и терпимость — вот цели, к которым я ежедневно должен стремиться.\nЯ прошу Бога, как я Его понимаю, помочь мне быть любящим и терпимым и с моими\nблизкими, и с теми, кто меня постоянно окружает. Я прошу о Его руководстве,\nчтобы вовремя «прикусить язык», когда я возбужден, остановиться и подумать о\nдушевном волнении, которое мои слова могут вызвать не только у других людей,\nно и у меня самого. Молитва, углубленное размышление и самоанализ — вот ключи\nк здравомыслию и положительным действиям.</p>";

				const frontmatter = {"title":"12 октября","description":"Размышления АА на сегодня - 12 октября","id":"286","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_12-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОБУЗДАТЬ ТОРОПЛИВОСТЬ\n\n**Когда мы говорим или действуем поспешно, наша способность быть разумными и\nтерпеливыми мгновенно улетучивается.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 103  \nTwelve Steps and Twelve Traditions, p. 91_**\n\nБлагоразумие и терпимость — вот цели, к которым я ежедневно должен стремиться.\nЯ прошу Бога, как я Его понимаю, помочь мне быть любящим и терпимым и с моими\nблизкими, и с теми, кто меня постоянно окружает. Я прошу о Его руководстве,\nчтобы вовремя «прикусить язык», когда я возбужден, остановиться и подумать о\nдушевном волнении, которое мои слова могут вызвать не только у других людей,\nно и у меня самого. Молитва, углубленное размышление и самоанализ — вот ключи\nк здравомыслию и положительным действиям.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"обуздать-торопливость","text":"ОБУЗДАТЬ ТОРОПЛИВОСТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
