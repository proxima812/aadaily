import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"качество-веры\">КАЧЕСТВО ВЕРЫ</h2>\n<p><strong>Здесь дело в качестве веры… Если мерить по большому счету, то мы так и не\nудосужились провести серьезную и глубокую критическую оценку своих душевных\nкачеств… Мы даже не умели по-настоящему молиться. Мы всегда говорили: «Исполни\nмои желания» вместо того, чтобы сказать: «Да исполнится воля Твоя».</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 39<br>\nTwelve Steps and Twelve Traditions, p. 32</em></strong></p>\n<p>Бог не дарует мне материальных благ, не избавляет от страданий и бед. Но Он\nдает мне душевный покой и способность справляться с жизненными трудностями.\nМои молитвы просты. Во-первых, в них выражается моя благодарность за все\nхорошее в моей жизни, независимо от того, насколько трудно мне это далось, и,\nво-вторых, я прошу только о силе и мудрости исполнять Его волю. Он отвечает\nрешением моих проблем, поддержкой моей способности пережить ежедневные\nнеурядицы со спокойствием, о котором я и не подозревал, и с силой, позволяющей\nна практике применять принципы АА в повседневных делах.</p>";

				const frontmatter = {"title":"5 ноября","description":"Размышления АА на сегодня - 5 ноября","id":"310","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_05-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## КАЧЕСТВО ВЕРЫ\n\n**Здесь дело в качестве веры… Если мерить по большому счету, то мы так и не\nудосужились провести серьезную и глубокую критическую оценку своих душевных\nкачеств… Мы даже не умели по-настоящему молиться. Мы всегда говорили: «Исполни\nмои желания» вместо того, чтобы сказать: «Да исполнится воля Твоя».**\n\n**_Двенадцать шагов и двенадцать традиций, с. 39  \nTwelve Steps and Twelve Traditions, p. 32_**\n\nБог не дарует мне материальных благ, не избавляет от страданий и бед. Но Он\nдает мне душевный покой и способность справляться с жизненными трудностями.\nМои молитвы просты. Во-первых, в них выражается моя благодарность за все\nхорошее в моей жизни, независимо от того, насколько трудно мне это далось, и,\nво-вторых, я прошу только о силе и мудрости исполнять Его волю. Он отвечает\nрешением моих проблем, поддержкой моей способности пережить ежедневные\nнеурядицы со спокойствием, о котором я и не подозревал, и с силой, позволяющей\nна практике применять принципы АА в повседневных делах.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"качество-веры","text":"КАЧЕСТВО ВЕРЫ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };