import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"любовь-в-их-глазах\">ЛЮБОВЬ В ИХ ГЛАЗАХ</h2>\n<p><strong>Некоторые из нас не хотят верить в Бога, другие не могут, кое-кто верит, что\nБог есть, но отказывается верить, что Он совершит ожидаемое от Него чудо\nисцеления.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 31<br>\nTwelve Steps and Twelve Traditions, p. 25</em></strong></p>\n<p>Изменения, которые я видел в новых людях, пришедших в Содружество, помогли мне\nрасстаться со страхом и поменять свои отрицательные жизненные позиции на\nположительные. Я видел любовь в их глазах, и меня потрясло то, как много\nзначила для них их трезвость «только сегодня». Они открыто посмотрели на\nВторой Шаг и поверили, что Сила более могущественная, чем они сами, возвратит\nих к здравомыслию. Они дали мне веру в Содружество и надежду, что я обрету в\nнем то же, что и они. Я узнал, что Бог — это любящий Бог, а не тот карающий,\nкоторого я боялся до прихода в АА. Еще я понял, что Он был со мной и тогда,\nкогда я был в беде до прихода в АА. Сегодня я знаю, что именно Он привел меня\nв АА, и что я — чудо.</p>";

				const frontmatter = {"title":"17 февраля","description":"Размышления АА на сегодня - 17 февраля","id":"48","datePublished":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/fevral/daily_17-02.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЛЮБОВЬ В ИХ ГЛАЗАХ\n\n**Некоторые из нас не хотят верить в Бога, другие не могут, кое-кто верит, что\nБог есть, но отказывается верить, что Он совершит ожидаемое от Него чудо\nисцеления.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 31  \nTwelve Steps and Twelve Traditions, p. 25_**\n\nИзменения, которые я видел в новых людях, пришедших в Содружество, помогли мне\nрасстаться со страхом и поменять свои отрицательные жизненные позиции на\nположительные. Я видел любовь в их глазах, и меня потрясло то, как много\nзначила для них их трезвость «только сегодня». Они открыто посмотрели на\nВторой Шаг и поверили, что Сила более могущественная, чем они сами, возвратит\nих к здравомыслию. Они дали мне веру в Содружество и надежду, что я обрету в\nнем то же, что и они. Я узнал, что Бог — это любящий Бог, а не тот карающий,\nкоторого я боялся до прихода в АА. Еще я понял, что Он был со мной и тогда,\nкогда я был в беде до прихода в АА. Сегодня я знаю, что именно Он привел меня\nв АА, и что я — чудо.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"любовь-в-их-глазах","text":"ЛЮБОВЬ В ИХ ГЛАЗАХ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };