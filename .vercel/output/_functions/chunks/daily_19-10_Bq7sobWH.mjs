import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"основной-корень-аа\">«ОСНОВНОЙ КОРЕНЬ» АА</h2>\n<p><strong>Принцип, согласно которому мы не найдем сколько-нибудь надежной опоры, пока\nне признаем полного поражения, является тем корнем, на основе которого\nзародилось и расцвело наше Содружество.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 27<br>\nTwelve Steps and Twelve Traditions, pp. 21-22</em></strong></p>\n<p>Я был раздавлен и знал об этом, когда впервые вошел в двери АА. Я был один и\nбоялся неизвестности. Какая-то внешняя сила подняла меня с постели, направила\nк телефонному справочнику, потом на автобусную остановку и к дверям АА.\nОказавшись в АА, я почувствовал, что меня любят и принимают, чего не ощущал с\nсамого раннего детства. Пусть меня никогда не покидает ощущение радостного\nудивления, испытанного мною в первый вечер в АА, вечер величайшего события\nвсей моей жизни.</p>";

				const frontmatter = {"title":"19 октября","description":"Размышления АА на сегодня - 19 октября","id":"293","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_19-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## «ОСНОВНОЙ КОРЕНЬ» АА\n\n**Принцип, согласно которому мы не найдем сколько-нибудь надежной опоры, пока\nне признаем полного поражения, является тем корнем, на основе которого\nзародилось и расцвело наше Содружество.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 27  \nTwelve Steps and Twelve Traditions, pp. 21-22_**\n\nЯ был раздавлен и знал об этом, когда впервые вошел в двери АА. Я был один и\nбоялся неизвестности. Какая-то внешняя сила подняла меня с постели, направила\nк телефонному справочнику, потом на автобусную остановку и к дверям АА.\nОказавшись в АА, я почувствовал, что меня любят и принимают, чего не ощущал с\nсамого раннего детства. Пусть меня никогда не покидает ощущение радостного\nудивления, испытанного мною в первый вечер в АА, вечер величайшего события\nвсей моей жизни.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"основной-корень-аа","text":"«ОСНОВНОЙ КОРЕНЬ» АА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
