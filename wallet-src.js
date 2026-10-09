import {Keypair,VersionedTransaction} from '@solana/web3.js';
export function mint(){return Keypair.generate();}
export async function send(provider,base64,mint){const transaction=VersionedTransaction.deserialize(Uint8Array.from(atob(base64),c=>c.charCodeAt(0)));transaction.sign([mint]);const result=await provider.signAndSendTransaction(transaction);return typeof result==='string'?result:result.signature;}
