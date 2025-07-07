#Stage-1: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY .  .
RUN npm run build

# Stage 2: Runtime
FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app ./
ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]


