import columnGap from './column-gap';
import rowGap from './row-gap';

export default {
  name: 'Gap values',
  alias: 'gap-values',

  values: [
    {
      name: '&lt;length-percentage>',
      alias: 'typedef-length-percentage',
      desc: `<p class="">Specifies a gap between “rows” or “columns”,
as defined by the layout modes to which it applies;
see subsections below for details.</p>
     <p>Negative values are invalid. <a href="https://www.w3.org/TR/css-sizing-3/#percentage-sizing">As in the min size properties and margins/paddings</a> <a href="#biblio-css-sizing-3">[CSS-SIZING-3]</a>,
percentages resolve against zero
for determining intrinsic size contributions,
but resolve against the box’s content box
when laying out the box’s contents.</p>`
    },

    {
      name: 'normal',
      alias: 'valdef-row-gap-normal',
      desc: `<p>The <a href="#valdef-row-gap-normal">normal</a> represents
a used value of <span class="css">1em</span> on <a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>,
and a used value of <span class="css">0px</span> in all other contexts.</p>`
    }
  ],

  demos: [
    rowGap,
    columnGap
  ]
};
