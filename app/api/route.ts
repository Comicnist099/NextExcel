import { NextResponse } from 'next/server'
import { promises as fs } from 'fs';
import { read, utils} from 'xlsx';
 
export async function GET() {
    const wb = await read(await fs.readFile(process.cwd() + '/filename.xlsx'));

    var ws = wb.Sheets['nameSheet'];

    var data= utils.sheet_to_json(ws, {raw: true,header:1});
    const final=data.map((item: any) => ({
        Title: item[0],
        Amount:item[1]
    }));

    return NextResponse.json({
        data: final
    });
}