# EXCHANGE

Anonymous breakup trading cards and a wallet-assisted pump.fun launchpad. Built in the former KOL Finder repository; prior app remains in git history.

## Run

Node 24 or newer. `npm ci`, `npm run build`, `npm start`. `npm test` runs the API and transaction validation tests.

## Features

Six photorealistic AI portraits of fictional adult women, category filters and search, three-step creator with live preview, local drafts, downloadable cards, share links, wallet-signed story publishing, one reaction per browser visitor, wallet-owned recovery updates, and report intake. Six fictional sample cards have no tokens, volumes or fees. A published story card is clearly distinct from a launched token.

Launches use PumpPortal's local transaction API. The visitor creates a mint keypair in their browser, signs the mint, and reviews/signs/sends using Phantom or Solflare. No private keys are sent to this server. Metadata/art are stored immutably on the app's persistent volume and served publicly over HTTPS, not IPFS. Moving the domain will require keeping these URLs available. The server validates the create instruction's mint, name, ticker, URI, creator, signer set and fee mode. A card is listed as live only after Solana returns a successful confirmed transaction whose serialized message matches the prepared transaction. No launches or purchases are performed by the application operator.

The optional initial buy defaults to zero. Priority fee is 0.00005 SOL; buy slippage is 10%. Wallets show network/rent/protocol costs before signing. Standard creator fees go to the connected creator wallet. EXCHANGE charges no platform fee. Fee income is not tracked by this application, and goal amounts do not imply funds raised.

## Production

Docker builds the browser wallet SDK and runs Node 24. Railway volume `/data` holds SQLite via `RAILWAY_VOLUME_MOUNT_PATH`. A single replica is required. Optional `STORAGE_PATH`, `PORT`, `PUBLIC_URL` and `SOLANA_RPC_URL` configure storage, server port, canonical metadata origin, and a dedicated mainnet RPC. Default RPC is Solana's public mainnet endpoint, which may rate limit. `/health` checks process availability. Keep the volume backed up.

Signed wallet challenges expire in five minutes and are single-use. HttpOnly SameSite sessions expire in one hour. Browser-local launch confirmation records preserve submitted signatures across refreshes. Responses escape public text, anonymous text rejects handles/links/contact patterns, and all artwork comes from supplied AI portraits. No detector can guarantee anonymity, so house rules and reports are also present. Reaction limits are browser based, not Sybil resistant.

Reports are retained in the `reports` SQLite table for operator review. To hide a reported card: back up the DB, inspect the report and story, then `UPDATE stories SET status='hidden' WHERE id='reviewed-card-id';`. Its public metadata remains available if already referenced on-chain. Report intake does not imply automatic moderation. Add an operator dashboard before a broad public campaign.

Primary integration references: https://pumpportal.fun/creation/ and https://github.com/pump-fun/pump-public-docs/tree/main/idl. Protocol changes may require updating validation and transaction generation.

## Portrait assets

Six fictional adult portraits replace the original SVG symbols throughout the hero, sample cards, creator, downloads and token metadata. Generated with the built-in image tool, encoded as WebP for fast delivery without changing their compositions. See `public/assets/portraits/PROMPTS.md` for the generation prompts and asset paths.
