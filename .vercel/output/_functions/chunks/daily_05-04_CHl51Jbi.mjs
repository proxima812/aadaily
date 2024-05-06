import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"истинное-братство\">ИСТИННОЕ БРАТСТВО</h2>\n<p><strong>Не раз мы пытались стать полноправными членами семьи, настоящими друзьями\nдля своих друзей, хорошими работниками на работе и полезными членами общества.\nВсегда мы пытались либо взобраться на самый верх, либо скрыться в самом низу.\nТакое эгоистическое поведение препятствовало установлению с другими людьми\nотношений, основанных на сотрудничестве. Когда речь шла о настоящем\nтовариществе, у нас всегда возникали какие-то опасения.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 62<br>\nTwelve Steps and Twelve Traditions, p. 53</em></strong></p>\n<p>Эта мысль, изложенная в Четвертом Шаге, стала первым из того, что я услышал\nотчетливо и ясно: до этого мне еще не доводилось читать такое именно о себе\nсамом! До прихода в АА я не знал такого места, где меня могли бы научить, как\nстать личностью среди личностей. С самого первого собрания я видел, как это\nполучается у других, и захотел иметь то, что было у них. Одна из причин, по\nкоторой я сегодня счастливый и трезвый алкоголик, — это то, что я учу этот\nважнейший урок.</p>";

				const frontmatter = {"title":"5 апреля","description":"Размышления АА на сегодня - 5 апреля","id":"96","datePublished":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/april/daily_05-04.md";
				const url = undefined;
				function rawContent() {
					return "\n## ИСТИННОЕ БРАТСТВО\n\n**Не раз мы пытались стать полноправными членами семьи, настоящими друзьями\nдля своих друзей, хорошими работниками на работе и полезными членами общества.\nВсегда мы пытались либо взобраться на самый верх, либо скрыться в самом низу.\nТакое эгоистическое поведение препятствовало установлению с другими людьми\nотношений, основанных на сотрудничестве. Когда речь шла о настоящем\nтовариществе, у нас всегда возникали какие-то опасения.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 62  \nTwelve Steps and Twelve Traditions, p. 53_**\n\nЭта мысль, изложенная в Четвертом Шаге, стала первым из того, что я услышал\nотчетливо и ясно: до этого мне еще не доводилось читать такое именно о себе\nсамом! До прихода в АА я не знал такого места, где меня могли бы научить, как\nстать личностью среди личностей. С самого первого собрания я видел, как это\nполучается у других, и захотел иметь то, что было у них. Одна из причин, по\nкоторой я сегодня счастливый и трезвый алкоголик, — это то, что я учу этот\nважнейший урок.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"истинное-братство","text":"ИСТИННОЕ БРАТСТВО"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };