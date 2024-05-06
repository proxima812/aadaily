import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"избежать-соперничества\">ИЗБЕЖАТЬ СОПЕРНИЧЕСТВА</h2>\n<p><strong>История дает нам достаточно примеров соперничавших наций и боровшихся\nгруппировок, которые в конце концов распались, потому что были созданы для\nсоперничества или оказались втянутыми в него. Иные развалились из-за\nполнейшего самодовольства, пытаясь навязать остальной части человечества\n«золотой век» в своем особом понимании.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 196-197<br>\nTwelve Steps and Twelve Traditions, p. 176</em></strong></p>\n<p>Как член АА и наставник я знаю, что могу причинить реальный вред, если\nподдамся искушению давать кому бы то ни было советы по медицинским,\nматериальным или религиозным проблемам. Я не врач, не консультант и не\nадвокат. Я не должен никому указывать, как ему или ей надо жить. Однако я могу\nподелиться тем, как управлялся с подобными ситуациями без алкоголя и как Шаги\nи Традиции АА помогают мне справляться с жизнью.</p>";

				const frontmatter = {"title":"31 октября","description":"Размышления АА на сегодня - 31 октября","id":"305","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_31-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## ИЗБЕЖАТЬ СОПЕРНИЧЕСТВА\n\n**История дает нам достаточно примеров соперничавших наций и боровшихся\nгруппировок, которые в конце концов распались, потому что были созданы для\nсоперничества или оказались втянутыми в него. Иные развалились из-за\nполнейшего самодовольства, пытаясь навязать остальной части человечества\n«золотой век» в своем особом понимании.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 196-197  \nTwelve Steps and Twelve Traditions, p. 176_**\n\nКак член АА и наставник я знаю, что могу причинить реальный вред, если\nподдамся искушению давать кому бы то ни было советы по медицинским,\nматериальным или религиозным проблемам. Я не врач, не консультант и не\nадвокат. Я не должен никому указывать, как ему или ей надо жить. Однако я могу\nподелиться тем, как управлялся с подобными ситуациями без алкоголя и как Шаги\nи Традиции АА помогают мне справляться с жизнью.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"избежать-соперничества","text":"ИЗБЕЖАТЬ СОПЕРНИЧЕСТВА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
