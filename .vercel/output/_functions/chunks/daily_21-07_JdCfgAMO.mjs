import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"бесценный-дар\">БЕСЦЕННЫЙ ДАР</h2>\n<p><strong>К этому времени, скорее всего, мы уже в какой-то мере освободились от самых\nвопиющих наших изъянов. Временами мы испытываем удовольствие от чего-то\nпохожего на настоящий душевный покой. Для тех из нас, кто до сих пор был в\nсостоянии возбуждения, депрессии или беспокойства, иначе говоря, для всех нас,\nэтот приобретенный покой кажется бесценным даром.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 85-86<br>\nTwelve Steps and Twelve Traditions, p. 74</em></strong></p>\n<p>Я учусь предоставлять событиям идти своим чередом и самому полагаться на волю\nБога, держа свой разум открытым, а сердце — готовым принимать Божью милость во\nвсех моих делах. Только тогда я могу ощутить покой и свободу, которые обретаю\nв результате капитуляции. Мне уже доказали, что отказ от борьбы, возникающий в\nотчаянии и поражении, может перерасти в действительные дела веры и что эта\nвера означает свободу и победу.</p>";

				const frontmatter = {"title":"21 июля","description":"Размышления АА на сегодня - 21 июля","id":"203","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyul/daily_21-07.md";
				const url = undefined;
				function rawContent() {
					return "\n## БЕСЦЕННЫЙ ДАР\n\n**К этому времени, скорее всего, мы уже в какой-то мере освободились от самых\nвопиющих наших изъянов. Временами мы испытываем удовольствие от чего-то\nпохожего на настоящий душевный покой. Для тех из нас, кто до сих пор был в\nсостоянии возбуждения, депрессии или беспокойства, иначе говоря, для всех нас,\nэтот приобретенный покой кажется бесценным даром.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 85-86  \nTwelve Steps and Twelve Traditions, p. 74_**\n\nЯ учусь предоставлять событиям идти своим чередом и самому полагаться на волю\nБога, держа свой разум открытым, а сердце — готовым принимать Божью милость во\nвсех моих делах. Только тогда я могу ощутить покой и свободу, которые обретаю\nв результате капитуляции. Мне уже доказали, что отказ от борьбы, возникающий в\nотчаянии и поражении, может перерасти в действительные дела веры и что эта\nвера означает свободу и победу.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"бесценный-дар","text":"БЕСЦЕННЫЙ ДАР"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
