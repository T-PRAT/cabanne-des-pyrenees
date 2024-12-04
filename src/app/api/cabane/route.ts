import { db } from 'db'
import { hut } from 'db/schema'

// hut routes
export async function GET() {
  const huts = await db.select().from(hut).execute()
  return new Response(JSON.stringify(huts), {
    headers: { 'Content-Type': 'application/json' }
  })
}
