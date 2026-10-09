export const portraits=[
{id:'redflag',label:'Red flag brunette'},
{id:'ghost',label:'Platinum blonde'},
{id:'justfriend',label:'Curly-haired charmer'},
{id:'latenight',label:'Late-night texter'},
{id:'maybe',label:'Copper-haired maybe'},
{id:'hoodie',label:'Hoodie thief'}
];
export const palettes=['#ed6668','#b5b1ff','#c9f35e','#ffacdb','#ffb862','#88cbd2'];
export function portrait(n=0){return portraits[Number.isInteger(Number(n))&&Number(n)>=0&&Number(n)<portraits.length?Number(n):0];}
export function art(n=0){const p=portrait(n);return `<img class="persona-portrait" src="/assets/portraits/${p.id}.webp" alt="AI portrait of a fictional adult woman: ${p.label}" width="1254" height="1254" decoding="async">`;}
export async function png(n){const p=portrait(n),img=new Image();img.src=`/assets/portraits/${p.id}.webp`;await img.decode();const c=document.createElement('canvas');c.width=c.height=400;c.getContext('2d').drawImage(img,0,0,400,400);return c.toDataURL('image/png');}
