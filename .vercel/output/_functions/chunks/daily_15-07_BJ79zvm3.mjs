import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"гордыня\">ГОРДЫНЯ</h2>\n<p><strong>В течение тысячелетий мы пытались требовать бoльшую, чем нам причитается,\nдолю обеспеченности, престижа и любви. Когда нам казалось, что мы добиваемся\nэтого, мы пили, строя еще более грандиозные мечты. Потерпев хотя бы\nнезначительную неудачу, мы пили, чтобы забыться. Мы были безудержны в том, что\nмы считали своими потребностями.</strong></p>\n<p><strong>Во всех этих стремлениях, многие из которых не содержали в себе ничего\nпредосудительного, обнаруживалось отсутствие в нас смирения. Нам не хватало\nперспективы, чтобы понять, что главное внимание должно уделяться развитию\nличности и духовным ценностям и что удовлетворение материальных потребностей\nне является целью жизни.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 82-83<br>\nTwelve Steps and Twelve Traditions, p. 71</em></strong></p>\n<p>Вновь и вновь я приближался к Седьмому Шагу только для того, чтобы отступить и\nсосредоточиться. Чего-то явно недоставало, и смысл этого Шага ускользал от\nменя. Что же я упустил? — Оказывается, единственное слово, прочитанное, но\nпроигнорированное, основу всех Шагов и, в сущности, всей Программы АА. Это\nслово — «смиренно».</p>\n<p>Я понял свои недостатки: постоянно откладываю «на потом» решение, легко\nраздражаюсь, испытываю болезненное чувство жалости к себе. И я стал думать,\nпочему именно я? Затем я вспомнил: «Гордыня предшествует падению» и убрал\nгордыню из своей жизни.</p>";

				const frontmatter = {"title":"15 июля","description":"Размышления АА на сегодня - 15 июля","id":"197","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyul/daily_15-07.md";
				const url = undefined;
				function rawContent() {
					return "\n## ГОРДЫНЯ\n\n**В течение тысячелетий мы пытались требовать бoльшую, чем нам причитается,\nдолю обеспеченности, престижа и любви. Когда нам казалось, что мы добиваемся\nэтого, мы пили, строя еще более грандиозные мечты. Потерпев хотя бы\nнезначительную неудачу, мы пили, чтобы забыться. Мы были безудержны в том, что\nмы считали своими потребностями.**\n\n**Во всех этих стремлениях, многие из которых не содержали в себе ничего\nпредосудительного, обнаруживалось отсутствие в нас смирения. Нам не хватало\nперспективы, чтобы понять, что главное внимание должно уделяться развитию\nличности и духовным ценностям и что удовлетворение материальных потребностей\nне является целью жизни.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 82-83  \nTwelve Steps and Twelve Traditions, p. 71_**\n\nВновь и вновь я приближался к Седьмому Шагу только для того, чтобы отступить и\nсосредоточиться. Чего-то явно недоставало, и смысл этого Шага ускользал от\nменя. Что же я упустил? — Оказывается, единственное слово, прочитанное, но\nпроигнорированное, основу всех Шагов и, в сущности, всей Программы АА. Это\nслово — «смиренно».\n\nЯ понял свои недостатки: постоянно откладываю «на потом» решение, легко\nраздражаюсь, испытываю болезненное чувство жалости к себе. И я стал думать,\nпочему именно я? Затем я вспомнил: «Гордыня предшествует падению» и убрал\nгордыню из своей жизни.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"гордыня","text":"ГОРДЫНЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
