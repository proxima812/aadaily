import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"отдавать\">ОТДАВАТЬ</h2>\n<p><strong>Хотя они знали, что должны помогать другим алкоголикам, чтобы самим не пить,\nэтот мотив стал второстепенным для них. Более важным было ощущение счастья,\nкоторое они испытали, помогая другим.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 155<br>\nAlcoholics Anonymous, p. 159</em></strong></p>\n<p>Для меня эти слова относятся к передаче другим силы, посредством которой Бог,\nкак я Его понимаю, входит в мою жизнь. Молясь и размышляя, я открываю каналы\nсвязи с Богом, устанавливаю и укрепляю свой осознанный контакт с Ним.\nДействуя, я получаю силу, необходимую мне для поддержания трезвости каждый\nдень. Поддерживая свое духовное состояние, отдавая то, что безвозмездно было\nдано мне, я получаю ежедневную отсрочку приведения приговора в исполнение.</p>";

				const frontmatter = {"title":"26 августа","description":"Размышления АА на сегодня - 26 августа","id":"239","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_26-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОТДАВАТЬ\n\n**Хотя они знали, что должны помогать другим алкоголикам, чтобы самим не пить,\nэтот мотив стал второстепенным для них. Более важным было ощущение счастья,\nкоторое они испытали, помогая другим.**\n\n**_Анонимные Алкоголики, с. 155  \nAlcoholics Anonymous, p. 159_**\n\nДля меня эти слова относятся к передаче другим силы, посредством которой Бог,\nкак я Его понимаю, входит в мою жизнь. Молясь и размышляя, я открываю каналы\nсвязи с Богом, устанавливаю и укрепляю свой осознанный контакт с Ним.\nДействуя, я получаю силу, необходимую мне для поддержания трезвости каждый\nдень. Поддерживая свое духовное состояние, отдавая то, что безвозмездно было\nдано мне, я получаю ежедневную отсрочку приведения приговора в исполнение.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"отдавать","text":"ОТДАВАТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
