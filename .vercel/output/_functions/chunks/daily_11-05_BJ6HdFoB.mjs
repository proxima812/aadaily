import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"новое-ощущение-сопричастности\">НОВОЕ ОЩУЩЕНИЕ СОПРИЧАСТНОСТИ</h2>\n<p><strong>Пока мы с полной откровенностью не поговорили с кем-нибудь о наших\nконфликтах и не послушали, как кто-то делает то же самое, мы все еще не\nощущали полной сопричастности.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 67<br>\nTwelve Steps and Twelve Traditions, p. 57</em></strong></p>\n<p>После четырех лет в АА я увидел возможность освободиться от бремени глубоко\nскрытых эмоций, причинявших мне сильную боль. Благодаря консультациям\nпрофессионалов и помощи АА боль ослабла, и я ощутил смысл полной\nсопричастности и покоя. Я почувствовал также радость и любовь Бога, чего\nникогда не испытывал раньше. Я преклоняюсь перед силой Пятого Шага.</p>";

				const frontmatter = {"title":"11 мая","description":"Размышления АА на сегодня - 11 мая","id":"132","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_11-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## НОВОЕ ОЩУЩЕНИЕ СОПРИЧАСТНОСТИ\n\n**Пока мы с полной откровенностью не поговорили с кем-нибудь о наших\nконфликтах и не послушали, как кто-то делает то же самое, мы все еще не\nощущали полной сопричастности.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 67  \nTwelve Steps and Twelve Traditions, p. 57_**\n\nПосле четырех лет в АА я увидел возможность освободиться от бремени глубоко\nскрытых эмоций, причинявших мне сильную боль. Благодаря консультациям\nпрофессионалов и помощи АА боль ослабла, и я ощутил смысл полной\nсопричастности и покоя. Я почувствовал также радость и любовь Бога, чего\nникогда не испытывал раньше. Я преклоняюсь перед силой Пятого Шага.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"новое-ощущение-сопричастности","text":"НОВОЕ ОЩУЩЕНИЕ СОПРИЧАСТНОСТИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
