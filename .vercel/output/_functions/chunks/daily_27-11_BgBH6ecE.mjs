import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"опасность-быть-на-виду\">ОПАСНОСТЬ БЫТЬ НА ВИДУ</h2>\n<p><strong>Сначала пресса не понимала нашего отказа от личного участия в рекламе. Их\nискренне сбивало с толку наше требование о соблюдении анонимности. Потом они\nпоняли, в чем суть дела. Такое редко бывает в нашем мире — общество, которое\nхочет рекламировать свои принципы, но не своих членов. Пресса была в восторге\nот такого отношения. С тех пор ее репортажи об АА всегда проникнуты таким\nэнтузиазмом, который с трудом можно отыскать среди самых ревностных членов\nАА.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 202<br>\nTwelve Steps and Twelve Traditions, p. 182</em></strong></p>\n<p>Для того чтобы я и Содружество могли выжить, мне важно не использовать АА для\nприобретения личной известности. Анонимность для меня — это способ работы по\nобретению смирения. Поскольку гордыня — один из моих самых опасных\nнедостатков, работа со смирением — это один из лучших способов ее преодолеть.\nСодружество АА добивается всемирного признания, освещая, самыми различными\nметодами, свою работу и принципы, а отнюдь не рекламой отдельными его членами\nсамих себя. Привлекательность, появившаяся благодаря моим изменившимся\nвзглядам, и мой альтруизм намного больше способствуют благополучию АА, чем\nсамореклама.</p>";

				const frontmatter = {"title":"27 ноября","description":"Размышления АА на сегодня - 27 ноября","id":"332","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_27-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОПАСНОСТЬ БЫТЬ НА ВИДУ\n\n**Сначала пресса не понимала нашего отказа от личного участия в рекламе. Их\nискренне сбивало с толку наше требование о соблюдении анонимности. Потом они\nпоняли, в чем суть дела. Такое редко бывает в нашем мире — общество, которое\nхочет рекламировать свои принципы, но не своих членов. Пресса была в восторге\nот такого отношения. С тех пор ее репортажи об АА всегда проникнуты таким\nэнтузиазмом, который с трудом можно отыскать среди самых ревностных членов\nАА.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 202  \nTwelve Steps and Twelve Traditions, p. 182_**\n\nДля того чтобы я и Содружество могли выжить, мне важно не использовать АА для\nприобретения личной известности. Анонимность для меня — это способ работы по\nобретению смирения. Поскольку гордыня — один из моих самых опасных\nнедостатков, работа со смирением — это один из лучших способов ее преодолеть.\nСодружество АА добивается всемирного признания, освещая, самыми различными\nметодами, свою работу и принципы, а отнюдь не рекламой отдельными его членами\nсамих себя. Привлекательность, появившаяся благодаря моим изменившимся\nвзглядам, и мой альтруизм намного больше способствуют благополучию АА, чем\nсамореклама.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"опасность-быть-на-виду","text":"ОПАСНОСТЬ БЫТЬ НА ВИДУ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };