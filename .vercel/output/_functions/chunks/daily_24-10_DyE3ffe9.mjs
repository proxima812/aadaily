import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"верой-и-работой\">«ВЕРОЙ И РАБОТОЙ»</h2>\n<p><strong>Структура нашего Содружества обрела форму в горниле практики… Так было и с\nСодружеством АА. Вера и деятельность стали основой приобретенного нами\nогромного опыта. Он живет в Двенадцати Традициях Анонимных Алкоголиков,\nкоторые с Божьей помощью сохранят наше единство до тех пор, пока мы нужны\nЕму.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 145-146<br>\nTwelve Steps and Twelve Traditions, p. 131</em></strong></p>\n<p>Бог дал мне право на ошибку для того, чтобы наше Содружество существовало\nтаким, какое оно есть сейчас. Если в своей жизни я на первое место ставлю\nБожью волю, то скорее всего, АА, каким я знаю его сейчас, и в будущем\nостанется неизменным.</p>";

				const frontmatter = {"title":"24 октября","description":"Размышления АА на сегодня - 24 октября","id":"298","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_24-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## «ВЕРОЙ И РАБОТОЙ»\n\n**Структура нашего Содружества обрела форму в горниле практики… Так было и с\nСодружеством АА. Вера и деятельность стали основой приобретенного нами\nогромного опыта. Он живет в Двенадцати Традициях Анонимных Алкоголиков,\nкоторые с Божьей помощью сохранят наше единство до тех пор, пока мы нужны\nЕму.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 145-146  \nTwelve Steps and Twelve Traditions, p. 131_**\n\nБог дал мне право на ошибку для того, чтобы наше Содружество существовало\nтаким, какое оно есть сейчас. Если в своей жизни я на первое место ставлю\nБожью волю, то скорее всего, АА, каким я знаю его сейчас, и в будущем\nостанется неизменным.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"верой-и-работой","text":"«ВЕРОЙ И РАБОТОЙ»"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
