import {test} from 'node:test';
import assert from 'node:assert/strict';
process.env.NODE_ENV='test';
const {candidates}=await import('../server.mjs');
test('candidate counts deduplicate authors per paper and retain source evidence',()=>{const author={name:'Jane Smith',short:'Smith J',affiliations:[],orcid:null};const result=candidates([{id:'1',title:'Study one',url:'https://example.org/1',citations:5,authors:[author,author]},{id:'2',title:'Study two',url:'https://example.org/2',citations:2,authors:[{...author,affiliations:['Verified in paper']}]}]);assert.equal(result.length,1);assert.equal(result[0].count,2);assert.equal(result[0].citations,7);assert.equal(result[0].papers.length,2);assert.deepEqual(result[0].affiliations,['Verified in paper']);});
test('discovery sorts by sampled appearances before paper citations',()=>{const a={name:'A',short:'A',affiliations:[]},b={name:'B',short:'B',affiliations:[]};const r=candidates([{id:'1',citations:100,authors:[a,b]},{id:'2',citations:0,authors:[b]}]);assert.equal(r[0].name,'B');});
