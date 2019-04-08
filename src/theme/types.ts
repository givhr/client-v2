export interface ITheme extends IThemeColors, IThemeBoxShadows {
  font: PrimaryFont;
}

export type PrimaryFont = 'Helvetica, Arial';

export interface IThemeBoxShadows {
  boxShadowHR: '0 3px 5px 0 rgba(0,0,0,0.13);';
  boxShadowVertNav: '0 1px 4px 0 rgba(0,0,0,0.2)';
  boxShadowHorzNav: '0 2px 6px 0 rgba(0,0,0,0.5)';
  boxShadowCard: '0 2px 6px 0 rgba(95,95,95,0.5)';
  boxShadowGiveawayCard: '0 15px 20px 3px rgba(95,95,95,0.33)';
}

export interface IThemeColors {
  primary1: '#FFFFFF';
  primary2: '#F8F8F8';
  primary3: '#F0F0F0';
  primary4: '#E5E5E5';
  primary5: '#D3D3D3';
  primary6: '#B5B5B5';
  primary7: '#888787';
  primary8: '#5F5F5F';
  primary9: '#3E3E3E';
  primary10: '#C8BCCF';
  primary11: '#9981A5';
  primary12: '#836793';
  primary13: '#765787';
  primary14: '#C32020';
  primary15: '#964444';
  primary16: '#397F15';
}

export type StyleReset = `
* {
	box-sizing: border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}`;
