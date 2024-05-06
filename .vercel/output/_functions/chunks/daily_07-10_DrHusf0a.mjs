import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"ежедневно-отслеживать\">ЕЖЕДНЕВНО ОТСЛЕЖИВАТЬ</h2>\n<p><strong>Продолжали самоанализ…</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 100<br>\nTwelve Steps and Twelve Traditions, p. 88</em></strong></p>\n<p>Духовная аксиома Десятого Шага такова: каждый раз, когда мы огорчены, то,\nнезависимо от причины, в чем-то виноваты и сами. Исключений не бывает. Какими\nбы неразумными ни казались другие люди, за свою негативную реакцию\nответственность несу только я. Что бы ни происходило во-круг, за то, что\nпроисходит внутри меня, отвечаю я. Именно я создаю свою собственную\nреальность.</p>\n<p>В процессе проведения ежедневного самоанализа я осознаю, что мне надо\nпрекратить осуждать людей. Если я их осуждаю, то, вероятно, осуждаю и самого\nсебя. Тот, кто более всего меня расстроил, и есть мой лучший учитель. В этой\nситуации есть многое, чему мне стоит поучиться, и в сердце своем я должен быть\nблагодарным этому человеку.</p>";

				const frontmatter = {"title":"7 октября","description":"Размышления АА на сегодня - 7 октября","id":"281","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_07-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЕЖЕДНЕВНО ОТСЛЕЖИВАТЬ\n\n**Продолжали самоанализ…**\n\n**_Двенадцать шагов и двенадцать традиций, с. 100  \nTwelve Steps and Twelve Traditions, p. 88_**\n\nДуховная аксиома Десятого Шага такова: каждый раз, когда мы огорчены, то,\nнезависимо от причины, в чем-то виноваты и сами. Исключений не бывает. Какими\nбы неразумными ни казались другие люди, за свою негативную реакцию\nответственность несу только я. Что бы ни происходило во-круг, за то, что\nпроисходит внутри меня, отвечаю я. Именно я создаю свою собственную\nреальность.\n\nВ процессе проведения ежедневного самоанализа я осознаю, что мне надо\nпрекратить осуждать людей. Если я их осуждаю, то, вероятно, осуждаю и самого\nсебя. Тот, кто более всего меня расстроил, и есть мой лучший учитель. В этой\nситуации есть многое, чему мне стоит поучиться, и в сердце своем я должен быть\nблагодарным этому человеку.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"ежедневно-отслеживать","text":"ЕЖЕДНЕВНО ОТСЛЕЖИВАТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };