// Make the AI Judge Laugh: Cat Reviews Its Human — a one-star review
// from a house cat about its human, under 200 characters. Deadpan
// review shape; the complaint goes somewhere only a cat would go.
import { mkdir, open } from 'node:fs/promises';

const REVIEW =
  'One star. My human opens the fridge, stares at it like a loading screen, and closes it. I have watched this 4,000 times. Nothing ever loads.';

const folder = process.env['MAKEFUN_OUTPUT_DIR'] || '/output';
await mkdir(folder, { recursive: true });
const handle = await open(`${folder}/entry.txt`, 'w');
await handle.write(REVIEW);
await handle.close();
