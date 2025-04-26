# F1Lens - Your Ultimate F1 Game Companion

F1Lens is an AI-powered chat assistant built with Next.js that provides fast, reliable answers to all your questions about Formula One games and racing. Whether you need game strategies, car setups, driver insights, or race simulations, F1Lens helps elevate your gaming experience and keep you ahead of the competition.

## Features

- AI chat assistant specialized in Formula One using OpenAI GPT-4
- Context-aware responses augmented with recent F1 data from Wikipedia and official sources
- Vector search powered by DataStax Astra DB for relevant context retrieval
- Streaming chat interface with prompt suggestions for quick queries
- Easy-to-use web interface built with Next.js 15 and React 19

## Tech Stack

- Next.js 15 with React 19
- OpenAI GPT-4 API for AI chat completions and embeddings
- DataStax Astra DB for vector database and context storage
- Langchain and Puppeteer for data scraping and processing
- TypeScript for type safety and developer experience

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- An OpenAI API key
- DataStax Astra DB account with a vector search-enabled database

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
OPENAI_API_KEY=your_openai_api_key
ASTRA_DB_APPLICATION_TOKEN=your_astra_db_application_token
ASTRA_DB_API_ENDPOINT=your_astra_db_api_endpoint
ASTRA_DB_NAMESPACE=your_astra_db_namespace
ASTRA_DB_COLLECTION=your_astra_db_collection_name
```

### Installation

Install dependencies:

```bash
npm install
```

### Database Seeding

To seed the vector database with Formula One data, run:

```bash
npm run seed
```

This script scrapes the Formula One Wikipedia page, splits the content into chunks, generates embeddings, and loads them into Astra DB.

### Running the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use F1Lens.

### Building and Starting for Production

Build the app:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Usage

- Ask questions about Formula One games and racing in the chat interface.
- Get context-aware, markdown-formatted answers powered by GPT-4 and enriched with recent F1 data.
- Use prompt suggestions to quickly try common queries.

## Deployment

The easiest way to deploy F1Lens is on [Vercel](https://vercel.com), the platform from the creators of Next.js.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API](https://platform.openai.com/docs)
- [DataStax Astra DB](https://www.datastax.com/products/datastax-astra)
- [Langchain](https://python.langchain.com/en/latest/)
- [Puppeteer](https://pptr.dev/)

## License

This project is licensed under the MIT License.

---
