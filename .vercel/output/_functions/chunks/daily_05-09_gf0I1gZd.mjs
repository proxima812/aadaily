import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"эмоциональное-равновесие\">ЭМОЦИОНАЛЬНОЕ РАВНОВЕСИЕ</h2>\n<p><strong>Возмещали причиненный этим людям ущерб, где только возможно…</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 95<br>\nTwelve Steps and Twelve Traditions, р. 83</em></strong></p>\n<p>Оглядываясь на дни своего пьянства, я вспоминаю многих людей, с которыми\nвстретился случайно, но чью жизнь, тем не менее, я отравил своими злобой и\nсарказмом. Этих людей не найти, и извиниться перед ними невозможно. Все, что я\nмогу сделать для них, все, что могу предложить «для изменения к лучшему», так\nэто косвенные извинения, приносимые мною другим людям, с которыми сталкивает\nменя судьба. Проявляемые постоянно вежливость и доброта помогают мне жить в\nэмоциональном равновесии и в согласии с самим собой.</p>";

				const frontmatter = {"title":"5 сентября","description":"Размышления АА на сегодня - 5 сентября","id":"249","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_05-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЭМОЦИОНАЛЬНОЕ РАВНОВЕСИЕ\n\n**Возмещали причиненный этим людям ущерб, где только возможно…**\n\n**_Двенадцать шагов и двенадцать традиций, с. 95  \nTwelve Steps and Twelve Traditions, р. 83_**\n\nОглядываясь на дни своего пьянства, я вспоминаю многих людей, с которыми\nвстретился случайно, но чью жизнь, тем не менее, я отравил своими злобой и\nсарказмом. Этих людей не найти, и извиниться перед ними невозможно. Все, что я\nмогу сделать для них, все, что могу предложить «для изменения к лучшему», так\nэто косвенные извинения, приносимые мною другим людям, с которыми сталкивает\nменя судьба. Проявляемые постоянно вежливость и доброта помогают мне жить в\nэмоциональном равновесии и в согласии с самим собой.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"эмоциональное-равновесие","text":"ЭМОЦИОНАЛЬНОЕ РАВНОВЕСИЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
