import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"желание--это-ключ\">ЖЕЛАНИЕ — ЭТО КЛЮЧ</h2>\n<p><strong>Однажды воспользовавшись нашим желанием как ключом, открывающим замок, и\nслегка при-открыв дверь, мы обнаружили, что теперь сможем открывать ее всегда\nи все шире и шире.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 42<br>\nTwelve Steps and Twelve Traditions, p. 35</em></strong></p>\n<p>Готовность отдать свою гордыню и -упрямство Силе более могущественной, чем я,\nоказалось той единственной составляющей, которая абсолютно необходима сегодня\nдля решения всех моих проблем. Даже малой толики готовности, если оно\nискренне, достаточно, чтобы Бог мог войти в мою жизнь и взять на Себя любую\nмою проблему, боль или одержимость. Уровень моего благополучия напрямую связан\nсо степенью моей готовности прямо сейчас отказаться от своеволия и позволить\nБожьей воле доминировать в моей жизни. С ключом желания мои тревоги и страхи\nлегко трансформируются в душевный покой.</p>";

				const frontmatter = {"title":"7 марта","description":"Размышления АА на сегодня - 7 марта","id":"67","datePublished":"2023-05-04T00:00:00.000Z","moth":"mart"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/mart/daily_07-03.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЖЕЛАНИЕ — ЭТО КЛЮЧ\n\n**Однажды воспользовавшись нашим желанием как ключом, открывающим замок, и\nслегка при-открыв дверь, мы обнаружили, что теперь сможем открывать ее всегда\nи все шире и шире.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 42  \nTwelve Steps and Twelve Traditions, p. 35_**\n\nГотовность отдать свою гордыню и -упрямство Силе более могущественной, чем я,\nоказалось той единственной составляющей, которая абсолютно необходима сегодня\nдля решения всех моих проблем. Даже малой толики готовности, если оно\nискренне, достаточно, чтобы Бог мог войти в мою жизнь и взять на Себя любую\nмою проблему, боль или одержимость. Уровень моего благополучия напрямую связан\nсо степенью моей готовности прямо сейчас отказаться от своеволия и позволить\nБожьей воле доминировать в моей жизни. С ключом желания мои тревоги и страхи\nлегко трансформируются в душевный покой.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"желание--это-ключ","text":"ЖЕЛАНИЕ — ЭТО КЛЮЧ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
