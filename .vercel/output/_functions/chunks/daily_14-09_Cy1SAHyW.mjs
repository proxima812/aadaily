import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"душевный-покой\">ДУШЕВНЫЙ ПОКОЙ</h2>\n<p><strong>Нужно ли обсудить этот вопрос с наставником из АА или духовником и искренне\nпопросить у Бога помощи и руководства, одновременно решив сделать то, что\nокажется правильным, чего бы это нам ни стоило?</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 99<br>\nTwelve Steps and Twelve Traditions, pp. 86-87</em></strong></p>\n<p>Вера в Высшую Силу является существенной частью моей работы по Девятому Шагу;\nпрощение, выбор времени и верные мотивы — другие ее составляющие. Готовность\nработать по этому Шагу вытекает из моего все возрастающего опыта. Опыт же этот\nоткрывает двери к новым и честным отношениям с людьми, которым я причинил зло.\nМои ответственные действия приближают меня к духовным принципам Программы —\nлюбви и служению. Затем наверняка последуют душевный покой и еще более крепкая\nвера.</p>";

				const frontmatter = {"title":"14 сентября","description":"Размышления АА на сегодня - 14 сентября","id":"258","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_14-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## ДУШЕВНЫЙ ПОКОЙ\n\n**Нужно ли обсудить этот вопрос с наставником из АА или духовником и искренне\nпопросить у Бога помощи и руководства, одновременно решив сделать то, что\nокажется правильным, чего бы это нам ни стоило?**\n\n**_Двенадцать шагов и двенадцать традиций, с. 99  \nTwelve Steps and Twelve Traditions, pp. 86-87_**\n\nВера в Высшую Силу является существенной частью моей работы по Девятому Шагу;\nпрощение, выбор времени и верные мотивы — другие ее составляющие. Готовность\nработать по этому Шагу вытекает из моего все возрастающего опыта. Опыт же этот\nоткрывает двери к новым и честным отношениям с людьми, которым я причинил зло.\nМои ответственные действия приближают меня к духовным принципам Программы —\nлюбви и служению. Затем наверняка последуют душевный покой и еще более крепкая\nвера.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"душевный-покой","text":"ДУШЕВНЫЙ ПОКОЙ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
