import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"отпусти-и-положись-на-бога\">ОТПУСТИ И ПОЛОЖИСЬ НА БОГА</h2>\n<p><strong>…молясь лишь о знании Его воли, которую нам надлежит исполнить, и о\nдаровании силы для этого.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 109<br>\nTwelve Steps and Twelve Traditions, p. 96</em></strong></p>\n<p>Когда я «отпускаю и полагаюсь на Бога», то и рассуждаю более ясно и мудро.\nИзбавившись от сконцентрированности на чем-то конкретном, я быстро избавляюсь\nот боли и дискомфорта. А поскольку мне трудно «отпустить» мысли и чувства,\nпричиняющие огромные страдания, то все, что мне нужно в этот момент, —\nпозволить Богу, как я Его понимаю, освободить меня от них. И тогда тревожные\nмысли, чувства и воспоминания покидают меня.</p>\n<p>Получая помощь от Бога, я учусь понимать Его и день за днем справляться с\nлюбыми проблемами на моем пути. Только тогда я могу жить, побеждая алкоголь и\nнаслаждаясь спокойной трезвостью.</p>";

				const frontmatter = {"title":"7 ноября","description":"Размышления АА на сегодня - 7 ноября","id":"312","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_07-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОТПУСТИ И ПОЛОЖИСЬ НА БОГА\n\n**…молясь лишь о знании Его воли, которую нам надлежит исполнить, и о\nдаровании силы для этого.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 109  \nTwelve Steps and Twelve Traditions, p. 96_**\n\nКогда я «отпускаю и полагаюсь на Бога», то и рассуждаю более ясно и мудро.\nИзбавившись от сконцентрированности на чем-то конкретном, я быстро избавляюсь\nот боли и дискомфорта. А поскольку мне трудно «отпустить» мысли и чувства,\nпричиняющие огромные страдания, то все, что мне нужно в этот момент, —\nпозволить Богу, как я Его понимаю, освободить меня от них. И тогда тревожные\nмысли, чувства и воспоминания покидают меня.\n\nПолучая помощь от Бога, я учусь понимать Его и день за днем справляться с\nлюбыми проблемами на моем пути. Только тогда я могу жить, побеждая алкоголь и\nнаслаждаясь спокойной трезвостью.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"отпусти-и-положись-на-бога","text":"ОТПУСТИ И ПОЛОЖИСЬ НА БОГА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
