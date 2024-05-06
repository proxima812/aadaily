import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"победа-сдавшегося\">ПОБЕДА СДАВШЕГОСЯ</h2>\n<p><strong>Мы приходим к выводу, что, только потерпев полное поражение, можно обрести\nспособность встать на путь, ведущий к силе и освобождению. Признание полного\nбессилия в конечном счете оказывается прочным основанием, на котором можно\nпостроить счастливую, целенаправленную жизнь.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 26<br>\nTwelve Steps and Twelve Traditions, p. 21</em></strong></p>\n<p>Когда алкоголь влиял на все грани моей жизни, когда бутылки стали символом\nуступок самому себе и вседозволенности, когда я осознал, что сам я ничего не\nмогу сделать, чтобы преодолеть силу алкоголя, тогда я наконец понял, что мне\nне осталось ничего, кроме капитуляции. Сдаваясь, я обрел победу — победу над\nэгоистичными уступками самому себе, победу над моим упрямым сопротивлением той\nжизни, какой она мне была дана. Только прекратив борьбу со всем и со всеми, я\nначал движение по пути к трезвости, смирению и душевному покою.</p>";

				const frontmatter = {"title":"6 января","description":"Размышления АА на сегодня - 6 января","id":"6","datePublished":"2023-05-04T00:00:00.000Z","moth":"yanvar"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/yanvar/daily_06-01.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПОБЕДА СДАВШЕГОСЯ\n\n**Мы приходим к выводу, что, только потерпев полное поражение, можно обрести\nспособность встать на путь, ведущий к силе и освобождению. Признание полного\nбессилия в конечном счете оказывается прочным основанием, на котором можно\nпостроить счастливую, целенаправленную жизнь.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 26  \nTwelve Steps and Twelve Traditions, p. 21_**\n\nКогда алкоголь влиял на все грани моей жизни, когда бутылки стали символом\nуступок самому себе и вседозволенности, когда я осознал, что сам я ничего не\nмогу сделать, чтобы преодолеть силу алкоголя, тогда я наконец понял, что мне\nне осталось ничего, кроме капитуляции. Сдаваясь, я обрел победу — победу над\nэгоистичными уступками самому себе, победу над моим упрямым сопротивлением той\nжизни, какой она мне была дана. Только прекратив борьбу со всем и со всеми, я\nначал движение по пути к трезвости, смирению и душевному покою.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"победа-сдавшегося","text":"ПОБЕДА СДАВШЕГОСЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };