import { NextRequest } from 'next/server';
import fetch from 'node-fetch';

export async function GET(request:NextRequest) {
  const notionApiUrl = `https://api.notion.com/v1/blocks/804a8345-3a87-4503-8bc6-7bb878605243/children`;

  const response = await fetch(notionApiUrl, {
    headers: {
      'Authorization': `Bearer secret_h8pkMnX3QXNwJ4e9r9iuX4RiA7Llz82DOkmXUFq247d`,
      'Notion-Version': '2022-06-28',
    },
  });

  const data = await response.json();
  return new Response(JSON.stringify(data));
}