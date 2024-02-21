import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Token interceptor is working");
  let _token = 'test';
  let jwtToken = req.clone({
    setHeaders: {
      Authorization : 'bearer ' +_token
    }
  })
   return next(req);
 // return next(jwtToken);
};
