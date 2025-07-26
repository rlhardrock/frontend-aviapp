import { HttpInterceptorFn } from '@angular/common/http';
import { TOKEN_KEY } from '../services/auth.constants';

export const authInterceptorFn: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(TOKEN_KEY);

  // No agregar token si no existe
  if (!token) return next(req);

  // No agregar token si va a /auth/login (evita error de login)
  if (req.url.includes('/auth/login')) return next(req);

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authReq);
};
