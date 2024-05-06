import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"служить-богу-и-окружающим\">…СЛУЖИТЬ БОГУ И ОКРУЖАЮЩИМ</h2>\n<p><strong>Наша настоящая цель — изменить свою жизнь таким образом, чтобы приносить\nмаксимальную пользу Богу и окружающим.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 74, 75<br>\nAlcoholics Anonymous, p. 77</em></strong></p>\n<p>Совершенно ясно, что замысел Бога в отношении меня выражается через любовь.\nБог так сильно любит меня, что вытащил с помоек и из тюрем, чтобы я стал\nполезным участником Его мира. Моим ответом Ему должна стать моя любовь ко всем\nЕго детям, выражаемая, в том числе, в служении и собственном примере. Я прошу\nБога помочь мне любить людей так же, как Он любит меня.</p>";

				const frontmatter = {"title":"3 августа","description":"Размышления АА на сегодня - 3 августа","id":"217","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_03-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## …СЛУЖИТЬ БОГУ И ОКРУЖАЮЩИМ\n\n**Наша настоящая цель — изменить свою жизнь таким образом, чтобы приносить\nмаксимальную пользу Богу и окружающим.**\n\n**_Анонимные Алкоголики, с. 74, 75  \nAlcoholics Anonymous, p. 77_**\n\nСовершенно ясно, что замысел Бога в отношении меня выражается через любовь.\nБог так сильно любит меня, что вытащил с помоек и из тюрем, чтобы я стал\nполезным участником Его мира. Моим ответом Ему должна стать моя любовь ко всем\nЕго детям, выражаемая, в том числе, в служении и собственном примере. Я прошу\nБога помочь мне любить людей так же, как Он любит меня.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"служить-богу-и-окружающим","text":"…СЛУЖИТЬ БОГУ И ОКРУЖАЮЩИМ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
