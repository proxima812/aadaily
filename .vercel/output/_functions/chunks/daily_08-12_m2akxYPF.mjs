import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"служение\">СЛУЖЕНИЕ</h2>\n<p><strong>Ваша жизнь приобретет новый смысл. Следите за тем, как люди выздоравливают,\nкак они, в свою очередь, начинают помогать другим, как они перестают быть\nодинаковыми, как вокруг нас возникает братство. Широкий круг друзей несет с\nсобой ценный опыт, которым не следует пренебрегать… Частые контакты с\nновичками и друг с другом станут яркими событиями вашей жизни.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 86<br>\nAlcoholics Anonymous, p. 89</em></strong></p>\n<p>Самые большие награды можно получить только через служение. Но чтобы\nосуществлять истинное, полезное и эффективное служение для других, я должен\nпрежде всего работать над собой. Это значит, что я должен перепоручить себя\nБогу, признавая свои недостатки и расчищая завалы своего прошлого. Работа над\nсобой научила меня, как обрести столь необходимые мне мир и душевный покой,\nчтобы с успехом объединять вдохновение и опыт. Я узнал, как быть проводником\nтрезвости в истинном понимании этого выражения.</p>";

				const frontmatter = {"title":"8 декабря","description":"Размышления АА на сегодня - 8 декабря","id":"343","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_08-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## СЛУЖЕНИЕ\n\n**Ваша жизнь приобретет новый смысл. Следите за тем, как люди выздоравливают,\nкак они, в свою очередь, начинают помогать другим, как они перестают быть\nодинаковыми, как вокруг нас возникает братство. Широкий круг друзей несет с\nсобой ценный опыт, которым не следует пренебрегать… Частые контакты с\nновичками и друг с другом станут яркими событиями вашей жизни.**\n\n**_Анонимные Алкоголики, с. 86  \nAlcoholics Anonymous, p. 89_**\n\nСамые большие награды можно получить только через служение. Но чтобы\nосуществлять истинное, полезное и эффективное служение для других, я должен\nпрежде всего работать над собой. Это значит, что я должен перепоручить себя\nБогу, признавая свои недостатки и расчищая завалы своего прошлого. Работа над\nсобой научила меня, как обрести столь необходимые мне мир и душевный покой,\nчтобы с успехом объединять вдохновение и опыт. Я узнал, как быть проводником\nтрезвости в истинном понимании этого выражения.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"служение","text":"СЛУЖЕНИЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
