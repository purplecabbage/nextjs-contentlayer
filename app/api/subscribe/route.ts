import { NextRequest, NextResponse } from 'next/server'

const API_KEY = process.env.CONVERTKIT_API_KEY;
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID
const BASE_URL = 'https://api.convertkit.com/v3';


export async function POST (req: NextRequest, res:NextResponse) {
  const params = await req.json()
  console.log(params)
  const url = [BASE_URL, `forms`, CONVERTKIT_FORM_ID, 'subscribe'].join('/');
  console.log('subscribing ... ', API_KEY, CONVERTKIT_FORM_ID, params.email)
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
  });
  const result = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      api_key: API_KEY,
      email: params.email,
      first_name: params.firstName
    })
  });
  const json = await result.json();
  console.log('json ', json)
  return NextResponse.json({ 
    state: json.subscription.state,
    subscriber:  json.subscription.subscriber 
  })
}
 