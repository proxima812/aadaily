import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"место-отдыха\">МЕСТО ОТДЫХА</h2>\n<p><strong>Все Двенадцать Шагов АА вступают в противоречие с нашими естественными\nжеланиями… они умаляют наше «я». Когда дело доходит до умаления собственного\n«я», то наиболее труден Пятый Шаг. Но для последующего трезвого образа жизни и\nдушевного покоя это самый необходимый Шаг.</strong></p>\n<p><strong><em>Двенадцать Шагов и Двенадцать Тради-ций, с. 64<br>\nTwelve Steps and Twelve Traditions, p. 55</em></strong></p>\n<p>Даже после того как я записал на бумаге недостатки своего характера, я не был\nготов говорить о них. Но в конце концов я решил, что пора прекратить тащить\nэту ношу одному. Она для меня одного слишком тяжела. Мне надо было поведать\nкому-либо об этих своих дефектах. Я читал (и мне говорили), что, не сделав\nэтого, мне не удастся остаться трезвым. Когда я в своей повседневной жизни\nстал практиковать Пятый Шаг, то наряду со смирением и душевным покоем обрел\nчувство сопричастности с людьми. Важно было признать недостатки моего\nхарактера именно в порядке, сформулированном в Пятом Шаге: «перед Богом, собой\nи каким-либо другим человеком». Признание в первую очередь перед Богом\nпроложило дорогу признанию перед собой и перед другим человеком. Как и\nнаписано в Пятом Шаге, чувство единения с Богом и со своим товарищем привело\nменя к месту отдыха. Здесь я смог подготовиться к работе по остальным Шагам,\nведущим к полноценной и такой значимой для меня трезвости.</p>";

				const frontmatter = {"title":"8 мая","description":"Размышления АА на сегодня - 8 мая","id":"129","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_08-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## МЕСТО ОТДЫХА\n\n**Все Двенадцать Шагов АА вступают в противоречие с нашими естественными\nжеланиями… они умаляют наше «я». Когда дело доходит до умаления собственного\n«я», то наиболее труден Пятый Шаг. Но для последующего трезвого образа жизни и\nдушевного покоя это самый необходимый Шаг.**\n\n**_Двенадцать Шагов и Двенадцать Тради-ций, с. 64  \nTwelve Steps and Twelve Traditions, p. 55_**\n\nДаже после того как я записал на бумаге недостатки своего характера, я не был\nготов говорить о них. Но в конце концов я решил, что пора прекратить тащить\nэту ношу одному. Она для меня одного слишком тяжела. Мне надо было поведать\nкому-либо об этих своих дефектах. Я читал (и мне говорили), что, не сделав\nэтого, мне не удастся остаться трезвым. Когда я в своей повседневной жизни\nстал практиковать Пятый Шаг, то наряду со смирением и душевным покоем обрел\nчувство сопричастности с людьми. Важно было признать недостатки моего\nхарактера именно в порядке, сформулированном в Пятом Шаге: «перед Богом, собой\nи каким-либо другим человеком». Признание в первую очередь перед Богом\nпроложило дорогу признанию перед собой и перед другим человеком. Как и\nнаписано в Пятом Шаге, чувство единения с Богом и со своим товарищем привело\nменя к месту отдыха. Здесь я смог подготовиться к работе по остальным Шагам,\nведущим к полноценной и такой значимой для меня трезвости.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"место-отдыха","text":"МЕСТО ОТДЫХА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };