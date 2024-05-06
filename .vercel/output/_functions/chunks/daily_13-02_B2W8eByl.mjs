import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"мы-не-можем-дойти-разумом-до-трезвости\">МЫ НЕ МОЖЕМ ДОЙТИ РАЗУМОМ ДО ТРЕЗВОСТИ</h2>\n<p><strong>Тем, кто опирается только на разум, многие члены АА могут сказать: «Да, мы\nбыли такими же, как вы, — слишком умными себе во вред… Втайне мы считали, что\nможем возвышаться над остальными людьми, опираясь только на свой интеллект».</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 60</em></strong></p>\n<p>Даже самый совершенный разум не является защитой от алкоголизма. Я не могу\nдойти разумом до трезвости. Я стараюсь помнить, что умственные способности —\nэто Богом данное свойство, которое я могу использовать, это радость — как\nиметь талант в живописи, танце или архитектуре. Это не делает меня лучше\nдругих и не предоставляет надежного инструмента для выздоровления, так как не\nвысокий уровень интеллекта или университетский диплом, а только Сила более\nмогущественная, чем я, вернет меня к здравомыслию.</p>";

				const frontmatter = {"title":"13 февраля","description":"Размышления АА на сегодня - 13 февраля","id":"44","datePublished":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/fevral/daily_13-02.md";
				const url = undefined;
				function rawContent() {
					return "\n## МЫ НЕ МОЖЕМ ДОЙТИ РАЗУМОМ ДО ТРЕЗВОСТИ\n\n**Тем, кто опирается только на разум, многие члены АА могут сказать: «Да, мы\nбыли такими же, как вы, — слишком умными себе во вред… Втайне мы считали, что\nможем возвышаться над остальными людьми, опираясь только на свой интеллект».**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 60_**\n\nДаже самый совершенный разум не является защитой от алкоголизма. Я не могу\nдойти разумом до трезвости. Я стараюсь помнить, что умственные способности —\nэто Богом данное свойство, которое я могу использовать, это радость — как\nиметь талант в живописи, танце или архитектуре. Это не делает меня лучше\nдругих и не предоставляет надежного инструмента для выздоровления, так как не\nвысокий уровень интеллекта или университетский диплом, а только Сила более\nмогущественная, чем я, вернет меня к здравомыслию.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"мы-не-можем-дойти-разумом-до-трезвости","text":"МЫ НЕ МОЖЕМ ДОЙТИ РАЗУМОМ ДО ТРЕЗВОСТИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };