import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"я-отвечаю\">Я ОТВЕЧАЮ</h2>\n<p>Ибо готовность взять на себя всю ответственность за последствия наших прошлых\nпоступков и в то же время принять на себя ответственность за благополучие\nдругих людей составляет суть Девятого Шага.</p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 99<br>\nTwelve Steps and Twelve Traditions, p. 87</em></strong></p>\n<p>Выздоравливая с помощью АА, я поняла, что моя собственная свобода — это именно\nто, чего я боюсь. Эта боязнь проистекает из страха взять на себя любую\nответственность: я отказываю, игнорирую, обвиняю, избегаю. Затем проходит\nвремя, и я рассматриваю, признаю и принимаю. Ощущаемые мною свобода, исцеление\nи выздоровление заключаются в рассмотрении, признании и принятии. Я учусь\nговорить: «Да, я отвечаю». Когда я произношу эти слова честно и искренне — я\nсвободна.</p>";

				const frontmatter = {"title":"12 сентября","description":"Размышления АА на сегодня - 12 сентября","id":"256","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_12-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## Я ОТВЕЧАЮ\n\nИбо готовность взять на себя всю ответственность за последствия наших прошлых\nпоступков и в то же время принять на себя ответственность за благополучие\nдругих людей составляет суть Девятого Шага.\n\n**_Двенадцать шагов и двенадцать традиций, с. 99  \nTwelve Steps and Twelve Traditions, p. 87_**\n\nВыздоравливая с помощью АА, я поняла, что моя собственная свобода — это именно\nто, чего я боюсь. Эта боязнь проистекает из страха взять на себя любую\nответственность: я отказываю, игнорирую, обвиняю, избегаю. Затем проходит\nвремя, и я рассматриваю, признаю и принимаю. Ощущаемые мною свобода, исцеление\nи выздоровление заключаются в рассмотрении, признании и принятии. Я учусь\nговорить: «Да, я отвечаю». Когда я произношу эти слова честно и искренне — я\nсвободна.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"я-отвечаю","text":"Я ОТВЕЧАЮ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
