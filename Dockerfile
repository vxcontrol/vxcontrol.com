FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --ignore-scripts

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Workaround: Create empty files and folders to replicate the structure of the pages in the app
RUN find ./src/pages \( -type d -exec mkdir -p "/app/dummyPages/{}" \; -o -type f -exec touch "/app/dummyPages/{}" \; \)

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/next.config.js ./next.config.js
COPY --from=builder --chown=nextjs:nodejs /app/i18n.js ./i18n.js
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

# Workaround #1 (part ii)
COPY --from=builder --chown=nextjs:nodejs /app/dummyPages ./pages

USER nextjs

EXPOSE 3000
ENV PORT 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]
