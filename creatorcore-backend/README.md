# CreatorCoreX Backend

## Environment Setup

1. Copy `.env.example` to `.env` and fill in secrets for your environment.
2. Never commit `.env` with real secrets to the repo.
3. See `SECURITY.md` for security policies and threat model.

## Security Middleware
- helmet (with CSP)
- express-mongo-sanitize
- hpp
- express-rate-limit
- express-slow-down

## Input Validation
- Joi schemas for all public API routes

## Auth/session
- JWT (15m access, 30d refresh, rotation, invalidation)
- Double-submit CSRF for refresh
- HttpOnly, Secure, SameSite=Lax cookies

## File Uploads
- Only jpeg/png/webp/mp4, size/type/filename checks, SVG rejected
