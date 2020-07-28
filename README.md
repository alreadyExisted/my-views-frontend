# My Views Frontend

Frontend part of website for keeping statistics of movie, series and animes views

## Development

```
npm i
npm run dev
```

## Deployment

### Build

```
docker build -t my-views-frontend .
```

### Run

```
docker run -p [EXTERNAL PORT]:80 -e MAIN_API=https://api.my-views.com my-views-frontend
```

### Configuration

All available configuration props stored in `.env.example`