function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const bigint = parseInt(h, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function luminance([r, g, b]) {
  const srgb = [r / 255, g / 255, b / 255].map((c) => {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function contrast(hex1, hex2) {
  const L1 = luminance(hexToRgb(hex1));
  const L2 = luminance(hexToRgb(hex2));
  const bright = Math.max(L1, L2);
  const dark = Math.min(L1, L2);
  return (bright + 0.05) / (dark + 0.05);
}

const tests = [
  { a: '#f17f26', b: '#ffffff', name: 'primary (#f17f26) on white' },
  { a: '#80aa3c', b: '#ffffff', name: 'accent (#80aa3c) on white' },
  { a: '#f17f26', b: '#000000', name: 'primary on black' },
  { a: '#80aa3c', b: '#000000', name: 'accent on black' },
  { a: '#f17f26', b: '#fafafa', name: 'primary on background #fafafa' },
];

for (const t of tests) {
  const r = contrast(t.a, t.b);
  console.log(`${t.name}: ratio ${r.toFixed(2)} | AA (normal) ${r>=4.5 ? 'PASS' : 'FAIL'} | AA (large) ${r>=3 ? 'PASS' : 'FAIL'} | AAA (normal) ${r>=7 ? 'PASS' : 'FAIL'}`);
}
