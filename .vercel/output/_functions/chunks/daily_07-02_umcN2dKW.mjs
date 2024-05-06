import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"путь-к-вере\">ПУТЬ К ВЕРЕ</h2>\n<p><strong>Подлинное смирение и непредвзятое отношение могут привести нас к вере, и\nкаждое собрание АА есть гарантия того, что Бог вернет нам здравомыслие, если\nмы найдем правильный способ общения с Ним.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 40<br>\nTwelve Steps and Twelve Traditions, p. 33</em></strong></p>\n<p>Моя последняя пьянка довела меня, полностью сломленного, до больницы. Перед\nмоими глазами прошла тогда вся моя жизнь. Я увидел, что из-за пьянства мне\nпришлось жить в сплошном кошмаре. Мое своеволие и одержимость алкоголем завели\nменя в пучину галлюцинаций, провалов в памяти, отчаяния. Окончательно\nсломленный, я взмолился о Божьей помощи. Его волей повернулся я к вере. Моя\nстрасть к алкоголю ушла, и исчезло мое эмоциональное безумие. Я больше не\nбоюсь. Теперь моя жизнь безболезненна и разумна.</p>";

				const frontmatter = {"title":"7 февраля","description":"Размышления АА на сегодня - 7 февраля","id":"38","datePublished":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/fevral/daily_07-02.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПУТЬ К ВЕРЕ\n\n**Подлинное смирение и непредвзятое отношение могут привести нас к вере, и\nкаждое собрание АА есть гарантия того, что Бог вернет нам здравомыслие, если\nмы найдем правильный способ общения с Ним.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 40  \nTwelve Steps and Twelve Traditions, p. 33_**\n\nМоя последняя пьянка довела меня, полностью сломленного, до больницы. Перед\nмоими глазами прошла тогда вся моя жизнь. Я увидел, что из-за пьянства мне\nпришлось жить в сплошном кошмаре. Мое своеволие и одержимость алкоголем завели\nменя в пучину галлюцинаций, провалов в памяти, отчаяния. Окончательно\nсломленный, я взмолился о Божьей помощи. Его волей повернулся я к вере. Моя\nстрасть к алкоголю ушла, и исчезло мое эмоциональное безумие. Я больше не\nбоюсь. Теперь моя жизнь безболезненна и разумна.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"путь-к-вере","text":"ПУТЬ К ВЕРЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
