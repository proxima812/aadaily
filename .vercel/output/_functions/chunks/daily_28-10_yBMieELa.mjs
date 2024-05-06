import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"никем-не-нарушенная-традиция\">НИКЕМ НЕ НАРУШЕННАЯ ТРАДИЦИЯ</h2>\n<p><strong>Мы считаем, что сохранение Содружества и расширение его деятельности имеет\nгораздо бóльшее значение, чем тот вклад, который мы коллективно могли бы\nвнести в борьбу за какое-нибудь дело.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 197<br>\nTwelve Steps and Twelve Traditions, p. 177</em></strong></p>\n<p>Как много значит для меня то, что не нарушенная никем Традиция, существующая\nуже более пятидесяти лет, невидимой нитью связывает меня с Биллом У. и с\nдоктором Бобом! Как же сильно я убежден в своем желании оставаться в\nСодружестве, цели которого постоянны и неколебимы! Я благодарен за то, что\nэнергия АА никогда не распылялась, но концентрировалась на членах Содружества\nи на трезвости каждого из них.</p>\n<p>Мои убеждения — это то, что делает меня человеком. Я волен иметь собственное\nмнение, но цель АА, так четко сформулированная более полувека назад, состоит в\nтом, чтобы сохранить мою трезвость. Ради достижения этой цели круглосуточно\nпроходят собрания, тысячи добровольцев работают в тысячах бюро и служб.\nПодобно солнечным лучам, сфокусированным увеличительным стеклом, объединенный\nвзгляд АА зажег огонь веры в трезвость в миллионах сердец, в том числе и в\nмоем.</p>";

				const frontmatter = {"title":"28 октября","description":"Размышления АА на сегодня - 28 октября","id":"302","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_28-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## НИКЕМ НЕ НАРУШЕННАЯ ТРАДИЦИЯ\n\n**Мы считаем, что сохранение Содружества и расширение его деятельности имеет\nгораздо бóльшее значение, чем тот вклад, который мы коллективно могли бы\nвнести в борьбу за какое-нибудь дело.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 197  \nTwelve Steps and Twelve Traditions, p. 177_**\n\nКак много значит для меня то, что не нарушенная никем Традиция, существующая\nуже более пятидесяти лет, невидимой нитью связывает меня с Биллом У. и с\nдоктором Бобом! Как же сильно я убежден в своем желании оставаться в\nСодружестве, цели которого постоянны и неколебимы! Я благодарен за то, что\nэнергия АА никогда не распылялась, но концентрировалась на членах Содружества\nи на трезвости каждого из них.\n\nМои убеждения — это то, что делает меня человеком. Я волен иметь собственное\nмнение, но цель АА, так четко сформулированная более полувека назад, состоит в\nтом, чтобы сохранить мою трезвость. Ради достижения этой цели круглосуточно\nпроходят собрания, тысячи добровольцев работают в тысячах бюро и служб.\nПодобно солнечным лучам, сфокусированным увеличительным стеклом, объединенный\nвзгляд АА зажег огонь веры в трезвость в миллионах сердец, в том числе и в\nмоем.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"никем-не-нарушенная-традиция","text":"НИКЕМ НЕ НАРУШЕННАЯ ТРАДИЦИЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };