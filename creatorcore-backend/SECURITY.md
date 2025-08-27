# SECURITY.md

## Security Checklist
- [x] HTTPS enforced in production
- [x] CORS restricted to allowed origins
- [x] Helmet with strict CSP
- [x] express-mongo-sanitize, hpp, rate limiting, slow down
- [x] Input validation (Joi) for all public routes
- [x] JWT: 15m access, 30d refresh, rotation, invalidation
- [x] Double-submit CSRF for refresh
- [x] File uploads: type/size/filename checks, SVG rejected
- [x] No secrets in repo; .env.example only
- [x] Minimal structured logging (no PII)

## Threat Model Notes
- XSS/NoSQLi mitigated via sanitize/validation
- CSRF mitigated via double-submit on refresh
- Rate limiting/slowdown for brute force
- CORS/CSP for browser security
- File upload risks mitigated

## Reporting
If you discover a vulnerability, please email security@creatorcorex.com with details. We will respond promptly.
