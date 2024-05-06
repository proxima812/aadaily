import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"возрождение-в-аа\">«ВОЗРОЖДЕНИЕ В АА»</h2>\n<p><strong>Таков парадокс возрождения в АА: сила, возникающая из полного поражения и\nслабости; утрата человеком старой жизни — как условие обретения им новой.</strong></p>\n<p><strong><em>АА взрослеет<br>\nAA Comes of Age, p. 46</em></strong></p>\n<p>Тысячи укусов Зеленого Змия не заставили меня признать поражение. Я полагал,\nчто это моя моральная обязанность — победить «друга-врага». На первом собрании\nАА я был счастлив, почувствовав, что это нормально — признать поражение перед\nболезнью, не имеющей ничего общего с моей «моральной устойчивостью».\nИнстинктивно я понимал, что, войдя в двери АА, оказался в поле великой любви.\nБез всяких усилий со своей стороны я осознал, что любить самого себя — это\nхорошо и правильно и предопределено Богом. Мои чувства освободили меня там,\nгде мысли держали в рабстве. Я благодарен.</p>";

				const frontmatter = {"title":"19 июня","description":"Размышления АА на сегодня - 19 июня","id":"171","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyun/daily_19-06.md";
				const url = undefined;
				function rawContent() {
					return "\n## «ВОЗРОЖДЕНИЕ В АА»\n\n**Таков парадокс возрождения в АА: сила, возникающая из полного поражения и\nслабости; утрата человеком старой жизни — как условие обретения им новой.**\n\n**_АА взрослеет  \nAA Comes of Age, p. 46_**\n\nТысячи укусов Зеленого Змия не заставили меня признать поражение. Я полагал,\nчто это моя моральная обязанность — победить «друга-врага». На первом собрании\nАА я был счастлив, почувствовав, что это нормально — признать поражение перед\nболезнью, не имеющей ничего общего с моей «моральной устойчивостью».\nИнстинктивно я понимал, что, войдя в двери АА, оказался в поле великой любви.\nБез всяких усилий со своей стороны я осознал, что любить самого себя — это\nхорошо и правильно и предопределено Богом. Мои чувства освободили меня там,\nгде мысли держали в рабстве. Я благодарен.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"возрождение-в-аа","text":"«ВОЗРОЖДЕНИЕ В АА»"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };