
# Random Quote API (Vercel Serverless)

This project provides a simple serverless API hosted on Vercel that fetches random quotes from the Quotable API.

It supports CORS, making it easy to integrate with frontend apps (React, Vue, etc.).

The main purpose of this project is to solve the issue of CORS while trying to directly use [Quotable API](https://api.quotable.io/random) or other API.


## Features

- Fetch random quotes from Quotable.io
- Optional filtering by tags (e.g., inspirational, life)
- CORS enabled for public frontend use
- Serverless deployment on Vercel


## Project Structure

`api/
 └── quotes.js   # Serverless function (API endpoint)`
 

## API Usage

/api/quotes

### Query Parameters

| Parameter | Type   | Required | Example              | Description                                                    |
| --------- | ------ | -------- | -------------------- | -------------------------------------------------------------- |
| `tags`    | string | No       | `tags=inspirational` | Filter quotes by tag(s). Multiple tags can be comma-separated. |


### Example Request

curl "https://your-vercel-app.vercel.app/api/quotes?tags=inspirational"


### Example Response

`{
  "_id": "abc123",
  "content": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs",
  "tags": ["inspirational", "work"]
}`



## Development

1. Clone the repo:
   `git clone https://github.com/Netocodez/Quote-Api-Proxy.git`
   `cd your-repo`

3. Install dependencies (if you add frontend or 
   testing setup):
   `npm install`

4. Run locally with Vercel CLI: 
   `vercel dev`


### Deploy easily using Vercel:
`vercel`

The function will be available at:
https://your-vercel-app.vercel.app/api/quotes


## Live Demo

🌐 Live Demo: [Random Quote API](https://my-vercel-quote.vercel.app/api/quote)


## License

MIT License. Free to use and modify.

