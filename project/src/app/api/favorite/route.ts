import { promises as fs } from "fs";

export async function GET(request: Request) {
    let file = await fs.readFile(process.cwd() + '/data.json', 'utf8');
    const data = JSON.parse(file);
    // console.log(data);
    return Response.json(data);
  }