import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"мне-не-отказали-в-любви\">МНЕ НЕ ОТКАЗАЛИ В ЛЮБВИ</h2>\n<p><strong>АА шел второй год… В одной из групп появился новичок, который постучал в\nдверь и попросил впустить его… Вскоре оказалось, что он представляет собой\nпочти безнадежный случай, но что, несмотря на это, он хочет излечиться… [Он\nсказал]… «Позволите ли вы мне присоединиться к группе, поскольку я жертва еще\nхудшего, чем алкоголизм, пристрастия…»</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 158<br>\nTwelve Steps and Twelve Traditions, pp. 141-142</em></strong></p>\n<p>Я пришла к вам — жена, мать, женщина, забросившая мужа, детей, семью, —\nпьяница, зависимая от таблеток, словом, ничтожество. И тем не менее, никто не\nотказал мне в любви, заботе, не отвернулся от меня. Сегодня, благодаря милости\nБожьей, любви хорошего наставника и моей домашней группе, я могу сказать\n(через вас в АА), я — жена, мать, бабушка и женщина. Трезвая. Освободившаяся\nот таблеток. Ответственная.</p>\n<p>Без Высшей Силы, которую я обрела в Содружестве, моя жизнь была бы\nбессмысленной. Я бесконечно благодарна за то, что являюсь стойким членом АА.</p>";

				const frontmatter = {"title":"31 марта","description":"Размышления АА на сегодня - 31 марта","id":"91","datePublished":"2023-05-04T00:00:00.000Z","moth":"mart"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/mart/daily_31-03.md";
				const url = undefined;
				function rawContent() {
					return "\n## МНЕ НЕ ОТКАЗАЛИ В ЛЮБВИ\n\n**АА шел второй год… В одной из групп появился новичок, который постучал в\nдверь и попросил впустить его… Вскоре оказалось, что он представляет собой\nпочти безнадежный случай, но что, несмотря на это, он хочет излечиться… [Он\nсказал]… «Позволите ли вы мне присоединиться к группе, поскольку я жертва еще\nхудшего, чем алкоголизм, пристрастия…»**\n\n**_Двенадцать шагов и двенадцать традиций, с. 158  \nTwelve Steps and Twelve Traditions, pp. 141-142_**\n\nЯ пришла к вам — жена, мать, женщина, забросившая мужа, детей, семью, —\nпьяница, зависимая от таблеток, словом, ничтожество. И тем не менее, никто не\nотказал мне в любви, заботе, не отвернулся от меня. Сегодня, благодаря милости\nБожьей, любви хорошего наставника и моей домашней группе, я могу сказать\n(через вас в АА), я — жена, мать, бабушка и женщина. Трезвая. Освободившаяся\nот таблеток. Ответственная.\n\nБез Высшей Силы, которую я обрела в Содружестве, моя жизнь была бы\nбессмысленной. Я бесконечно благодарна за то, что являюсь стойким членом АА.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"мне-не-отказали-в-любви","text":"МНЕ НЕ ОТКАЗАЛИ В ЛЮБВИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };